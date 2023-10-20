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
    private _tiempoEstimadoMinutos: number;
    private _fechaCreacion: Date;
    private _prioridad: Prioridad
    

    constructor(titulo:string, tiempoEstimadoMinutos:number, fechaCreacion:Date, prioridad:Prioridad){
        this._titulo = titulo;
        this._tiempoEstimadoMinutos = tiempoEstimadoMinutos;
        this._fechaCreacion = fechaCreacion;
        this._prioridad = prioridad;
    }
    
}
