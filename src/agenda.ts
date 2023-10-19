/**
 * Clase Agenda
 * Entidad
 * Implementación de la clase Agenda que unirá los diferentes
 * objetos valores de la aplicación
 */

import { Tarea } from "./tarea"

type IntervaloTiempoLibreTrabajador ={
    inicio: Date,
    duracion: number
    trabajador: string
}

class Agenda{
    private _tiempoLibreTrabajadores:Array<IntervaloTiempoLibreTrabajador>;
    private _tareas:Array<Tarea>;
    private _tareasAsignadas:Map<Tarea, IntervaloTiempoLibreTrabajador>;

    constructor(){
        this._tiempoLibreTrabajadores = [];
        this._tareas = [];
        this._tareasAsignadas = new Map();
    }
    
}
