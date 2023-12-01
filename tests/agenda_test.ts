import { Agenda } from '../src/agenda';
import { Tarea } from '../src/tarea';
import { IntervaloLibre, IntervaloTiempoLibreTrabajador} from '../src/agenda';
import datosBarberia from "../src/data/barber.json";
import datosTiemposLibres from "../src/data/tiemposLIbres.json";


describe('Test Agenda', () => {
  let _agenda: Agenda;
  let _tiempoLibreTrabajadores: Array<IntervaloTiempoLibreTrabajador>;
  let _tareasAsignadas: Map<Tarea, IntervaloTiempoLibreTrabajador>;
  let _tareas: Array<Tarea>;

  function rellenarTareas() {
    if (datosBarberia.tareas && Array.isArray(datosBarberia.tareas)) {

      _tareas = datosBarberia.tareas.map((tareaData: {
        titulo: string, tiempoEstimadoEnMinutos: number, prioridad: number, fechaCreacion: string
      }) => {
        const tarea = new Tarea(
          tareaData.titulo,
          tareaData.tiempoEstimadoEnMinutos,
          tareaData.prioridad,
          new Date(tareaData.fechaCreacion)
        );
        return tarea;
      });
    }
  }

  function rellenarIntervalosLibres() {
    if (datosTiemposLibres.intervalos && Array.isArray(datosTiemposLibres.intervalos)) {
      _tiempoLibreTrabajadores = datosTiemposLibres.intervalos.map(item => {
        return {
          trabajador: item.trabajador,
          intervalosLibres: item.intervalosLibres.map(intervalo => {
            return {
              inicio: new Date(intervalo.inicio),
              duracionEnMinutos: intervalo.duracionEnMinutos
            };
          })
        };
      });
    }
  }

  function asignacionTareasNoOptimo(tiempoLibreTrabajadores: Array<IntervaloTiempoLibreTrabajador>, tareasAsignadas: Map<Tarea, IntervaloTiempoLibreTrabajador> , tareas: Array<Tarea>) {
    tareas.forEach(tarea => {
      if (!tareasAsignadas.has(tarea)) {
        tiempoLibreTrabajadores.forEach(barbero => {
          let intervalosLibres = barbero.intervalosLibres.filter(
            intervalo => !tareasAsignadas.has(tarea) && intervalo.duracionEnMinutos >= tarea.tiempoEstimadoEnMinutos
          );
  
          if (intervalosLibres.length > 0) {
            let intervaloSeleccionado = intervalosLibres[0];
            tareasAsignadas.set(tarea, { trabajador: barbero.trabajador, intervalosLibres: [intervaloSeleccionado] });
  
            tareas = tareas.filter(t => t !== tarea);
  
            const indexTrabajador = tiempoLibreTrabajadores.findIndex(item => item.trabajador === barbero.trabajador);
            tiempoLibreTrabajadores[indexTrabajador].intervalosLibres = tiempoLibreTrabajadores[indexTrabajador].intervalosLibres.map(intervalo => {
              if (intervalo === intervaloSeleccionado) {
                return {
                  inicio: intervalo.inicio,
                  duracionEnMinutos: intervalo.duracionEnMinutos - tarea.tiempoEstimadoEnMinutos
                };
              }
              return intervalo;
            });
            return;
          }
        });
      }
    });
  }

  beforeEach(() => {

    _tiempoLibreTrabajadores = [];
    _tareasAsignadas = new Map();
    _tareas = [];
    rellenarIntervalosLibres();
    rellenarTareas();
    _agenda = new Agenda(_tiempoLibreTrabajadores,_tareas, _tareasAsignadas);

  });

  test('Inicialización de variables agenda correctamente.', () => {

    expect(_tareas instanceof Array);
    expect(_tareas.length).toBeGreaterThan(0);
    expect(_tareasAsignadas instanceof Map).toBe(true);
    expect(_tiempoLibreTrabajadores).toBeInstanceOf(Array);

  });

  test('Asignación de tareas a barberos', () => {
    expect(_tiempoLibreTrabajadores.length).toBeGreaterThan(0);
    expect(_tareas.length).toBeGreaterThan(0);

    _agenda.asignacionTareas();

    expect(_tareasAsignadas.size).toBeGreaterThan(0);
    _tareasAsignadas.forEach((barbero, tarea) => {
      let tareaAsignada = _tareasAsignadas.get(tarea);
      expect(tareaAsignada).toBeDefined();
      if (tareaAsignada) {
        let tiempoLibreSuficiente = tareaAsignada.intervalosLibres.some(intervalo =>
          intervalo.duracionEnMinutos >= tarea.tiempoEstimadoEnMinutos
        );
        expect(tiempoLibreSuficiente).toBe(true);
      }
    });
    
  });

  test('La prioridad se ajusta correctamente.', ()=>{
    
    let _tareaAntigua = new Tarea('Tarea Antigua', 10, 2, new Date('2022-01-01'));
    _agenda['_tareas'] = [_tareaAntigua];
    expect(_tareaAntigua.prioridad).not.toBe(1);
    _agenda.ajusteDePrioridad();
    expect(_tareaAntigua.prioridad).toBe(1);
  
  });

  test('La asignación de tareas es óptima en cuanto a reparto por prioridad.', () => {
    
    let _tiempoLibreTrabajadoresNoOptimo = _tiempoLibreTrabajadores.slice();
    let _tareasAsignadasNoOptimo = new Map(_tareasAsignadas);
    let _tareasNoOptimo = _tareas.slice();

    asignacionTareasNoOptimo(_tiempoLibreTrabajadoresNoOptimo, _tareasAsignadasNoOptimo, _tareasNoOptimo);
    
    _agenda.asignacionTareas();

    const tareasAsignadasOriginal = Array.from(_tareasAsignadas.keys());
    const tareasAsignadasNoOptimo = Array.from(_tareasAsignadasNoOptimo.keys());
  
    tareasAsignadasOriginal.forEach((tarea, i) => {
      expect(tarea.prioridad).toBeLessThanOrEqual(tareasAsignadasNoOptimo[i].prioridad);
    });
    
  });

});
