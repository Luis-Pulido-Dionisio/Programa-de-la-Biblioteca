import { Libro } from './Libro';
import { Lector } from './Lector';

export class Copia{
    private fecha:string ="";
    private id=0;
    private estado:string="";
    private copias : any[]=[];
    
    constructor (fecha:string){
    this.fecha=fecha
    }


    public set_id(id:number){
        this.id = id;
    }
    public get_id():number{
        return this.id;
    }


    public set_estado(estado:string){
        this.estado = estado;
    }
    public get_estado():string{
        return this.estado;
    }


    public set_fecha(fecha:string){
        this.fecha = fecha;
    }
    public get_fecha ():string{
        return this.fecha;
    }

    

    public agregarcopia (No_copias:string,libro:Libro,lector:Lector):void{
        this.id++;
        let registro={
            registro:this.id,
            lector:lector,
            No_copias:No_copias,
            Estado:'Proceso',
            libro:libro,
        };
        this.copias.push(registro);
    }
    public Listacopias():void{
        console.log(this.copias);
    }
};
