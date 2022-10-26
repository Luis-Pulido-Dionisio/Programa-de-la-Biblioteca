import { Autor } from './Autor';

export class Libro {

    private titulo:string="";
    private tipo:string="";
    private editorial:string="";
    private year:string="";
    private Autor:any =[]=[];
   
    constructor (titulo:string,
        tipo:string,editorial:string,year:string){
        this.titulo=titulo;
        this.tipo=tipo;
        this.editorial=editorial;
        this.year=year;
        this.Autor.push(Autor);
    }
    

    public set_titulo(titulo:string){
        this.titulo = titulo;
   }
   public get_titulo():string{
       return this.titulo;
   }

   
   public set_tipo(tipo:string){
       this.tipo = tipo;
   }
    public get_tipo():string{
       return this.tipo;
   }


   public set_editorial(editorial:string){
       this.editorial = editorial;
   }
   public get_editorial():string{
        return this.editorial;
   }


   public set_year(year:string){
        this.year = year;
   }
   public get_year():string{
        return this.year;
   }
    
}












