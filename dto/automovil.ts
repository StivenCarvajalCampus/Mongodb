import { Expose, Transform } from "class-transformer";
import { IsDefined } from "class-validator";
export class Automovil{
    @Expose({name: 'automovil'})
    @IsDefined({message: ()=>{throw{ status:422, message: `El parametro automovil`}}})
    ID_Automovil:number;


    @Expose ({name: 'marca'})
    @IsDefined({message:()=>{throw{status:422, message:`El parametro marca es obligatorio`}}})
    Marca:string;


    @Expose ({name:'modelo'})
    @IsDefined({message:()=>{throw{status:422, message:`El parametro modelo es obligatorio`}}})
    Modelo:string;


    @Expose ({name:'año'})
    @IsDefined({message:()=>{throw{status:422,message:`El parametro año es obligatorio`}}})
    Anio:number;


    @Expose({name:'tipo'})
    @IsDefined ({message:()=>{throw{status:422, message:`El parametro tipo es obligatorio`}}})
    Tipo:string;


    @Expose({name: 'capacidad'})
    @IsDefined({message:()=>{throw{status:422, message:`El parametro capacidad es obligatorio`}}})
    Capacidad:number;


    @Expose({name: 'precio'})
    @IsDefined({message:()=>{throw{status:422, message:`El parametro precio es obligatorio`}}})
    Precio_Diario:number;



    constructor(data: Partial<Automovil>){
        Object.assign(this, data);
        this.ID_Automovil = 0;
        this.Marca="";
        this.Modelo="";
        this.Anio=0;
        this.Tipo="";
        this.Capacidad=0;
        this.Precio_Diario=0;

    }



}
//Falta culminar el Dto con todos los campos 