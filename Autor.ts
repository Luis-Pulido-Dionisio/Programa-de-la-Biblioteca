export class Autor{
    private nombre:string="";
    private nacionalidad:string="";
    private fecha_naci:string="";

    constructor (nombre:string, nacionalidad:string, fecha_naci:string,titulo:string,tipo:string,editorial:string,year:string)
     {
        
        this.nombre = nombre;
        this.nacionalidad = nacionalidad;
        this.fecha_naci = fecha_naci;
    }

    public set_nombre(nombre:string){
        this.nombre = nombre;
    }
    public get_nombre():string{
        return this.nombre;
    }


    public set_nacionalidad(nacionalidad:string){
        this.nacionalidad = nacionalidad;
    }
    public get_nacionalidad():string{
        return this.nacionalidad;
    }

    
    public set_fecha_naci(fecha_naci:string){
        this.fecha_naci = fecha_naci;
    }
    public get_fecha_naci():string{
        return this.fecha_naci;
    }
}
