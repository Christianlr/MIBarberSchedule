/**
 * Clase Tarea
 * Objeto-Valor
 * Necesaria para almacenar todos los atributos de una tarea
 * 
 */
export class Tarea{
    private _id: number;
    private _titulo: string;
    private _tiempoEstimado: number;
    private _fechaCreacion: Date;
    

    constructor(id:number, titulo:string, tiempoEstimado:number, fechaCreacion:Date){
        this._id = id;
        this._titulo = titulo;
        this._tiempoEstimado = tiempoEstimado;
        this._fechaCreacion = fechaCreacion;
    }
    
}

