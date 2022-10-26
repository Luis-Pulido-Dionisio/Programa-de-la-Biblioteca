export class prestamo{
    private inicio:string="";
    private fin:string="";
    constructor(nombre:string,nacionalidad:string,fecha_naci:string,titulo:string,tipo:string,editorial:string,year:string,no_socio:string,inicio:string,fin:string){
        this.inicio=inicio;
        this.fin=fin;
    }

    public set_inicio(inicio:string){
        this.inicio = inicio;
    }
    public get_inicio():string{
        return this.inicio;
    }

    
    public set_fin(fin:string){
        this.fin = fin;
    }
    public get_fin():string{
        return this.fin;
    }
   

}