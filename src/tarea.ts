/**
 * Clase Tarea
 * Objeto-Valor
 * Necesaria para almacenar todos los atributos de una tarea
 * 
 */
enum Prioridad{
    Alta = 1,
    Media,
    Baja
}

export class Tarea{
    private _titulo: string;
    private _tiempoEstimadoEnMinutos: number; 
    private _fechaCreacion: Date;
    private _prioridad: Prioridad
    

    constructor(titulo:string, _tiempoEstimadoEnMinutos:number, fechaCreacion:Date, prioridad:Prioridad){
        this._titulo = titulo;
        this._tiempoEstimadoEnMinutos = _tiempoEstimadoEnMinutos;
        this._fechaCreacion = fechaCreacion;
        this._prioridad = prioridad;
    }
    
}
