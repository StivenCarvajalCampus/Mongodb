import { Router } from "express";
import { conex } from "../db/atlas.js";
import { configGet } from '../limit/config.js';
import { plainToClass } from 'class-transformer';
import { DTO } from '../limit/token.js';
import expressQueryBoolean from 'express-query-boolean';
import { appMiddlewareAutomovilVerify, appDTODataAutomovil,appDTOParametrosAutomovil } from "../middleware/automovilmiddleware.js";
import { Automovil } from "../dtocontroller/automovil.js";
import { resolve } from "path";
let storageAutomovil= Router();


let db= await conex();

let automovil = db.collection("automovil");

storageAutomovil.use(expressQueryBoolean());

const getAutomovilById =(id)=>{
    return new Promise(async(resolve)=>{
        let result = await automovil.aggregate([{
            $match:{
                ID_Automovil:parseInt(id)
            }
        }]).toarray();
        resolve(result);
    })
};
const getAutomovilByCapaci = (capacidad)=>{
    return new Promise(async(resolve)=>{
        let result = await automovil.find({
            Capacidad:{
                $gt: parseInt(capacidad)
            }
        }).toarray();
        resolve(result);
    })

};
const getAutomovilByDispon = (disponible)=>{
    return new Promise(async(resolve)=>{
        let result = await automovil.aggregate([{
            $match:{
                Capacidad: parseInt(disponible)
            }
        },
        {
            $lookup:{
                from:"alquiler",
                localfield:"ID_Automovil",
                foreignField:"ID_Automovil_id",
                as:"alquileres_FK"
            }
        },
        {
            $project:{
                "_id":0,
                "Precio_Diario":0,
                "Anio":0,
                "Tipo":0
            }
        },
        {
            $match:{
                "alquileres_FK.Estado":"Disponible"
            }
        },
        {
            $project:{
                "alquileres_FK_id":0,
                "alquileres_FK.ID_Alquiler":0,
                "alquileres_FK.ID_Cliente_id":0,
                "alquileres_FK.ID_Automovil_id":0,
                "alquileres_FK.Fecha_Inicio":0,
                "alquileres_FK.Fecha_Fin":0,
                "alquileres_FK.Costo_Total":0,

            }
        }
    
    ]).toArray();
    resolve(result);
    })
};
const getAutomovilAll = ()=>{
    return new Promise(async(resolve)=>{
        let result = await automovil.find({}).toArray();
        resolve(result);
    })
};
storageAutomovil.get("/",configGet(), appMiddlewareAutomovilVerify, async(req, res)=>{
    try{
        const {id, capacidad} = req.query;
        if(id){
            const data = await getAutomovilById(id);
            res.send(data);

        }else if(capacidad){
            const data = await getAutomovilByCapaci();
            res.send(data);
        }else{
            const data = await getAutomovilAll();
            res.send(data);
        }
    }catch(err){
        console.error("Ocurrio un error al procesar la informacion",err.message);
        res.sendStatus(500);
    }
});
export default storageAutomovil;