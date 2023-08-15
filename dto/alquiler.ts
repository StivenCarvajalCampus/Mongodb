    import { Expose,Transform  } from "class-transformer";
    import { IsDefined, IsNumber, IsString,Matches } from "class-validator";
    export class Alquiler{
        @Expose({name:'alquiler'})
        @IsDefined({message:()=>{throw{status:422, message:`el parametro alquiler es obligatorio`}}})
        ID_Alquiler: number;



        @Expose({name:'cliente'})
        @IsDefined({message:()=>{throw{status:422, message:`El parametro cliente es obligatorio`}}})
        ID_Cliente_id: number;



        @Expose({name:'automovil'})
        @IsDefined({message:()=>{throw{status:422,message:`El parametro automovil es obligatorio`}}})
        ID_Automovil_id:number;

        @Expose({name: 'initDate'})
        @IsString({message: 'El parametro initDate debe estar en formato String'})
        @Matches(/^\d{4}-\d{2}-\d{2$}/,{message:'Error'})
        Fecha_Inicio:string;


        @Expose({name:'endDate'})
        @IsString({message: 'El parametro endDate debe estar formato string'})
        @Matches (/^\d{4}-\d{2}-\d{2$}/,{message:'Error'})
        Fecha_Fin: string;


        @Expose({name:'totalcosto'})
        @IsDefined({message:()=>{throw{status:422, message:`El parametro totalcosto es obligatorio`}}})
        Costo_Total:number;


        @Expose({name: 'estado'})
        @IsDefined({ message: ()=>{throw{status:422, message:`El parametro estado es obligatorio`}}})
        Estado:string;
    
    constructor(data: Partial<Alquiler>){
        Object.assign(this,data);
        this.ID_Alquiler = 0 ;
        this.ID_Cliente_id = 0; 
        this.ID_Automovil_id=0;
        this.Fecha_Inicio = "1999-05-11"
        this.Fecha_Fin="1999-02-12"
        this.Costo_Total=0;
        this.Estado="";
    }
    
    }