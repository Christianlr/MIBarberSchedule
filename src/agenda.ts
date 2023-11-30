/**
 * Clase Agenda
 * Entidad
 * Implementación de la clase Agenda que unirá los diferentes
 * objetos valores de la aplicación
 */

import { Tarea } from "./tarea"
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

export class Agenda {

    private _tiempoLibreTrabajadores: Array<IntervaloTiempoLibreTrabajador> = new Array<IntervaloTiempoLibreTrabajador>();
    private _tareas: Array<Tarea> = new Array<Tarea>();
    private _tareasAsignadas: Map<Tarea, IntervaloTiempoLibreTrabajador> = new Map<Tarea, IntervaloTiempoLibreTrabajador>();
    private _barberosRegistrados: Array<String> = new Array<String>();

    constructor() { 
        this._barberosRegistrados = datosBarberia.barberos.map((barbero: { nombre: string }) => barbero.nombre);

        this._tareas = datosBarberia.tareas.map((tareaData: {
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
        
        this._tiempoLibreTrabajadores = datosTiemposLibres.intervalos.map(item => {
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
        
    asignacionTareas() {
        this._tareas.sort((a, b) => a.prioridad - b.prioridad);
        let mejorAsignacion: Array<{ tarea: Tarea, barbero: IntervaloTiempoLibreTrabajador }> = [];
        let mejorTiempoLibreRestante = Infinity;

        const asignarTareasRecursivo = (tareasRestantes: Array<Tarea>, asignacionActual: Array<{ tarea: Tarea; barbero: IntervaloTiempoLibreTrabajador }>
        ) => {
            if (tareasRestantes.length === 0) {
                let tiempoLibreRestante = this.calcularTiempoLibreRestante(asignacionActual);
                if (tiempoLibreRestante < mejorTiempoLibreRestante) {
                    mejorTiempoLibreRestante = tiempoLibreRestante;
                    mejorAsignacion = asignacionActual.slice();
                }
                return;
            }
                let tareaActual = tareasRestantes[0];
                let barberosDisponibles = this._tiempoLibreTrabajadores.filter((trabajador) => {
                    return trabajador.intervalosLibres.some(
                        (intervalo) =>
                            intervalo.duracionEnMinutos >= tareaActual.tiempoEstimadoEnMinutos && 
                            this.tareaEnIntervaloDeFecha(tareaActual, intervalo)
                    );
                }); 

                if (barberosDisponibles.length > 0) {
                    barberosDisponibles.forEach(barbero => {
                        let nuevaAsignacion = [...asignacionActual, { tarea: tareaActual, barbero: barbero }];
                        let nuevasTareasRestantes = tareasRestantes.slice(1);
                        asignarTareasRecursivo(nuevasTareasRestantes, nuevaAsignacion);
                    });
                } else {
                    let nuevasTareasRestantes = tareasRestantes.slice(1);
                    asignarTareasRecursivo(nuevasTareasRestantes, asignacionActual);
                }
            
        };

        asignarTareasRecursivo(this._tareas, []);

        if (mejorAsignacion.length > 0) {
            mejorAsignacion.forEach((asignacion: { tarea: Tarea, barbero: IntervaloTiempoLibreTrabajador }) => {
                let tarea = asignacion.tarea;
                let barbero = asignacion.barbero;
                barbero.intervalosLibres.forEach((intervalo) => {

                    if (intervalo.duracionEnMinutos >= tarea.tiempoEstimadoEnMinutos) {
                        intervalo.duracionEnMinutos -= tarea.tiempoEstimadoEnMinutos;
                        this._tareas = this._tareas.filter(t => t !== tarea);
                        this._tareasAsignadas.set(tarea, barbero);
                    }
                });
            });
        }
    }

    private tareaEnIntervaloDeFecha(tarea: Tarea, intervalo: IntervaloLibre): boolean {
        const fechaInicioIntervalo = intervalo.inicio;
        const fechaFinIntervalo = new Date(fechaInicioIntervalo);
        fechaFinIntervalo.setMinutes(fechaInicioIntervalo.getMinutes() + intervalo.duracionEnMinutos);
    
        const fechaFinTntervaloConDuracionTarea = new Date(fechaFinIntervalo);
        fechaFinTntervaloConDuracionTarea.setMinutes(fechaFinIntervalo.getMinutes() - tarea.tiempoEstimadoEnMinutos);
        return tarea.fechaCreacion >= fechaInicioIntervalo && tarea.fechaCreacion <= fechaFinTntervaloConDuracionTarea;
    }
    

    private calcularTiempoLibreRestante(asignacion: Array<{ tarea: Tarea, barbero: IntervaloTiempoLibreTrabajador }>): number {
        let tiempoLibreRestante = 0;

        this._tiempoLibreTrabajadores.forEach(trabajador => {
            let tiempoOcupado = (asignacion.find(asignacion => asignacion.barbero === trabajador) || {}).tarea?.tiempoEstimadoEnMinutos || 0;
            let tiempoLibre = trabajador.intervalosLibres.reduce((total, intervalo) => total + intervalo.duracionEnMinutos, 0);
            tiempoLibreRestante += tiempoLibre - tiempoOcupado;
        });

        return tiempoLibreRestante;
    }

    
}
