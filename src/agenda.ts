/**
 * Clase Agenda
 * Entidad
 * Implementación de la clase Agenda que unirá los diferentes
 * objetos valores de la aplicación
 */


import { Trabajador } from "./trabajador"
import { Tarea } from "./tarea"


type IntervaloTiempoTrabajador ={
    inicio: Date,
    fin: Date
    trabajador: Trabajador
}

class Agenda{
    
    private _tiempoLibreTrabajadores:Array<IntervaloTiempoTrabajador>;
    private _tareas:Array<Tarea>;
    private _tareasAsignadas:Map<Tarea, IntervaloTiempoTrabajador>;

    constructor(){
        this._tiempoLibreTrabajadores = [];
        this._tareas = [];
        this._tareasAsignadas = new Map();
    }
    
}
