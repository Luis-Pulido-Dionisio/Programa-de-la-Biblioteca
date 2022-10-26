import { Autor } from "./Autor";
import { Copia } from "./Copia";
import { Libro } from "./Libro";
import { Lector } from "./Lector";

const Rodrigez=new Autor ("Rodrigez Perez", "Español", " 25/06/1998","Python","Educativo","trillas", "2006" )
console.log(Rodrigez);

const Python=new Libro ("Programacion orientada a objetos con C++","Educativo","RA_MA","2018")
console.log(Python);
const Typescript=new Libro("Las maravillas del mundo","Eduactivo","Independently","2020")
console.log(Typescript);

const Pedro= new Lector ("123","Pedro Vera", "2741342910", "Calla Aquiles Serdan esq. Ignacio Allende","678")
console.log(Pedro);
const Juan = new Lector ("101","Juan Lopez","2748978910","Agrarista","890")
console.log(Juan);
const Cop=new Copia ("21/10/2022");
Cop.agregarcopia("2",Python,Pedro);

Cop.agregarcopia("5",Typescript,Pedro)
console.log (Cop.Listacopias());