import { Expose, Transform } from "class-transformer";
import { IsDefined } from "class-validator";
export class Automovil{
    @Expose({name: 'automovil'})
    @IsDefined({message: ()=>{throw{ status:422, message: `El parametro automovil`}}})
    ID_Automovil:number;
}
//Falta culminar el Dto con todos los campos 