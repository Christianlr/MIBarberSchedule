/**
 * Clase Trabajador
 * Objeto-Valor
 * Necesaria para almacenar todos los atributos de un trabajador
 */

export class Trabajador{
    private _dni: number;
    private _nombre: string;
    private _apellidos: string;
    

    constructor(dni:number, nombre:string, apellidos:string){
        this._dni = dni;
        this._nombre = nombre;
        this._apellidos = apellidos;
    }
    
}