export class Multa{
    constructor (nombre:string,nacionalidad:string,fecha_naci:string,titulo:string,tipo:string,editorial:string,year:string,no_socio:string,fecha_inicio:string,fecha_fin:string){
        this.fecha_inicio=fecha_inicio;
        this.fecha_fin=fecha_fin;

    }

    private fecha_inicio:string="";
    private fecha_fin:string="";

    

    public set_fecha_inicio(fecha_inicio:string){
        this.fecha_inicio = fecha_inicio;
    }
    public get_fecha_inicio():string{
        return this.fecha_inicio;
    }


    public set_fecha_fin(fecha_fin:string){
        this.fecha_fin = fecha_fin;
    }
    public get_fecha_fin():string{
        return this.fecha_fin;
    }


    }
