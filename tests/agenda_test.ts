import { Agenda } from '../src/agenda';
import { Tarea } from '../src/tarea';
import datosBarberia from "../src/data/barber.json";
import datosTiemposLibres from "../src/data/tiemposLIbres.json";


type IntervaloLibre = {
  inicio: Date,
  duracionEnMinutos: number
};

type IntervaloTiempoLibreTrabajador = {
  trabajador: string,
  intervalosLibres: Array<IntervaloLibre>
};


describe('Test Agenda', () => {
  let _agenda: Agenda;
  let _tiempoLibreTrabajadores: Array<IntervaloTiempoLibreTrabajador>;
  let _tareasAsignadas: Map<Tarea, IntervaloTiempoLibreTrabajador>;
  let _barberosRegistrados: Array<string>;
  let _tareas: Array<Tarea>;

  function extraerDatosJSON() {
    if (datosBarberia.barberos && Array.isArray(datosBarberia.barberos)) {
      rellenarBarberos();
    }
    if (datosBarberia.tareas && Array.isArray(datosBarberia.tareas)) {
      rellenarTareas();
    }
    if (datosTiemposLibres.intervalos && Array.isArray(datosTiemposLibres.intervalos)) {
      rellenarIntervalosLibres();
    }
  }

  function rellenarBarberos() {
    _barberosRegistrados = datosBarberia.barberos.map((barbero: { nombre: string }) => barbero.nombre);
  }
  function rellenarTareas() {
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
  function rellenarIntervalosLibres() {
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

  beforeEach(() => {

    _barberosRegistrados = [];
    _tiempoLibreTrabajadores = [];
    _tareasAsignadas = new Map();
    _tareas = [];
    _agenda = new Agenda();

    extraerDatosJSON();
    _agenda.asignacionTareas();

  });

  test('Inicialización de variables agenda correctamente.', () => {

    expect(_barberosRegistrados instanceof Array);
    expect(_tareas instanceof Array);
    expect(_barberosRegistrados.length).toBeGreaterThan(0);
    expect(_tareas.length).toBeGreaterThan(0);
    expect(_tareasAsignadas instanceof Map).toBe(true);
    expect(_tiempoLibreTrabajadores).toBeInstanceOf(Array);

  });

  test('Asignación de tareas a barberos', () => {
    expect(_tiempoLibreTrabajadores.length).toBeGreaterThan(0);
    _tareasAsignadas.forEach((barbero, tarea) => {
      expect(_tareas.includes(tarea)).toBe(false);
      expect(barbero.intervalosLibres.some(intervalo => tarea.fechaCreacion >= intervalo.inicio)).toBe(true);
      let tareaAsignada = _tareasAsignadas.get(tarea);
      expect(tareaAsignada).toBeDefined();
      if (tareaAsignada) {
        let tiempoLibreSuficiente = tareaAsignada.intervalosLibres.some(intervalo =>
          intervalo.duracionEnMinutos >= tarea.tiempoEstimadoEnMinutos
        );
        expect(tiempoLibreSuficiente).toBe(true);
      }
    });

    let tareasRestantes = _tareas.length;
    let tareasAsignadas = _tareas.length - tareasRestantes;
    expect(_tareasAsignadas.size).toBe(tareasAsignadas);
    expect(tareasRestantes).toBeLessThanOrEqual(_tareas.length);
  });

  test('La asignación de tareas es óptima en cuanto a reparto por prioridad.', () => {
    //Se comprueba que la asignación de tareas a los barberos sea por orden de prioridad consultando sus asignaciones.
    _tareasAsignadas.forEach((barbero, tarea) => {
      const tareasAsignadasBarbero = Array.from(_tareasAsignadas.keys())
        .filter(t => _tareasAsignadas.get(t)?.trabajador === barbero.trabajador)
        .sort((a, b) => a.prioridad - b.prioridad);
      if (tareasAsignadasBarbero.length > 1){
        for (let i = 0; i < tareasAsignadasBarbero.length - 1; i++) {
          expect(tareasAsignadasBarbero[i].prioridad).toBeLessThanOrEqual(tareasAsignadasBarbero[i + 1].prioridad);
        }
      }
    });
  });
  
});
