/**
 * Clase Tarea
 * Objeto-Valor
 * Necesaria para almacenar todos los atributos de una tarea
 */


export class Tarea{
    private _titulo: string;
    private _tiempoEstimadoEnMinutos: number; 
    private _prioridad: number;
    private _fechaCreacion: Date;


    constructor(titulo:string, _tiempoEstimadoEnMinutos:number, prioridad:number, fechaCreacion:Date){
        this._titulo = titulo;
        this._tiempoEstimadoEnMinutos = _tiempoEstimadoEnMinutos;
        this._fechaCreacion = fechaCreacion;
        this._prioridad = prioridad;
        this._fechaCreacion = fechaCreacion;
    }
    
    get titulo(): string {
        return this._titulo;
    }

    get tiempoEstimadoEnMinutos(): number {
        return this._tiempoEstimadoEnMinutos;
    }

    get fechaCreacion(): Date {
        return this._fechaCreacion;
    }

    get prioridad(): number {
        return this._prioridad;
    }

}
