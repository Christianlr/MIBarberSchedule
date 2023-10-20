/**
 * Clase Agenda
 * Entidad
 * Implementación de la clase Agenda que unirá los diferentes
 * objetos valores de la aplicación
 */

import { Tarea } from "./tarea"

type IntervaloTiempoLibreTrabajador ={
    inicio: Date,
    duracionMinutos: number 
    trabajador: string
}

class Agenda{
    private _tiempoLibreTrabajadores:Array<IntervaloTiempoLibreTrabajador> = new Array<IntervaloTiempoLibreTrabajador>();
    private _tareas:Array<Tarea> = new Array<Tarea>();
    private _tareasAsignadas:Map<Tarea, IntervaloTiempoLibreTrabajador> = new Map<Tarea, IntervaloTiempoLibreTrabajador>();
}
