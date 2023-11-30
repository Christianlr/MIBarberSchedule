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

    constructor(_tiempoLibreTrabajadores: Array<IntervaloTiempoLibreTrabajador>, _tareas: Array<Tarea>, _tareasAsignadas: Map<Tarea, IntervaloTiempoLibreTrabajador>) {
        this._tiempoLibreTrabajadores = _tiempoLibreTrabajadores;
        this._tareas = _tareas;
        this._tareasAsignadas = _tareasAsignadas;
    }

    asignacionTareas() {

        this.ajusteDePrioridad();
        
        this._tareas.sort((a, b) => a.prioridad - b.prioridad);
        this._tareas.sort((a, b)=> a.fechaCreacion.getTime() - b.fechaCreacion.getTime());
        this._tareas.forEach(tarea => {
            if (!this._tareasAsignadas.has(tarea)) {
                this._tiempoLibreTrabajadores.forEach(barbero => {
                    let intervalosLibres = barbero.intervalosLibres.filter(
                        intervalo => !this._tareasAsignadas.has(tarea) && intervalo.duracionEnMinutos >= tarea.tiempoEstimadoEnMinutos
                    );

                    if (intervalosLibres.length > 0) {
                        let intervaloSeleccionado = intervalosLibres[0];
                        this._tareasAsignadas.set(tarea, { trabajador: barbero.trabajador, intervalosLibres: [intervaloSeleccionado] });

                        this._tareas = this._tareas.filter(t => t !== tarea);

                        const indexTrabajador = this._tiempoLibreTrabajadores.findIndex(item => item.trabajador === barbero.trabajador);
                        this._tiempoLibreTrabajadores[indexTrabajador].intervalosLibres = this._tiempoLibreTrabajadores[indexTrabajador].intervalosLibres.map(intervalo => {
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

    ajusteDePrioridad() {
        const hoy = new Date();
        this._tareas.forEach(tarea => {
            const diasDiferencia = Math.floor((hoy.getTime() - tarea.fechaCreacion.getTime()) / (1000 * 3600 * 24));
            if (diasDiferencia > 7) {
                if (tarea.prioridad != 1) {
                    tarea.setPrioridad(1);
                }
            }
        });
    }

}
