export class Lector{
    private no_socio:string="";
    private nombre_lector:string="";
    private telefono:string="";
    private direccion:string="";
    private TC:string="";

    constructor (no_socio:string,nombre_lector:string,telefono:string,direccion:string,TC:string){
        this.no_socio=no_socio;
        this.nombre_lector=nombre_lector;
        this.telefono=telefono;
        this.direccion=direccion
        this.TC=TC;
    }
    
    public set_no_socio(no_socio:string){
        this.no_socio = no_socio;
    }
    public get_no_socio():string{
        return this.no_socio;
    }


    public set_nombre_lector(nombre:string){
        this.nombre_lector = nombre;
    }
    public get_nombre_lector():string{
        return this.nombre_lector;
    }


    public set_telefono(telefono:string){
        this.telefono = telefono;
    }
    public get_telefono():string{
        return this.telefono;
    }


    public set_direccion(direccion:string){
        this.direccion = direccion;
    }
    public get_direccion():string{
        return this.direccion;
    }

    
    public set_TC(TC:string){
        this.TC = TC;
    }
    public get_TC():string{
        return this.TC;
    }
}