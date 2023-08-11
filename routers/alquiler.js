import { Router } from "express";
import { atlas } from "../db/atlas.js";
import { configGet } from "../limit/config.js";

const storageAlquiler = Router();
const db = await atlas();
storageAlquiler.use(configGet());

storageAlquiler.get("/", async (req, res)=>{
    try {
        const collection = atlas.collection("alquiler");
        const data =await collection
        .aggregate ([
            {
                $match: {
                    Estado:"Activo",
                },
            },
            {
                $lookup: {
                    from: "cliente",
                    localField: "ID_Cliente_id",
                    foreignField:"ID_Cliente",
                    as: "Cliente_Info",
                },
            },
            {
                $project: {
                    _id:0,
                    "Cliente_Info.id":0,
                    "Cliente_Info.ID_Cliente":0,
                },
            },

        ])
        .toArray();
    } catch (error) {
        
    }
});


storageAlquiler.get("/detallesid", async(req,res)=>{
    try {
        let{ id } = req.query;
        id = parseInt(id);
        const collection = db.collection("alquiler");
        const data =await collection
        .aggregate([
            {
                $match:{
                    ID_Alquiler:1,
                },
            },
            {
                $lookup:{
                    from:"cliente",
                    localField:"ID_Cliente_id",
                    foreignField:"ID_Cliente",
                    as: "Cliente_Info",
                },
            },
            {
                $unwind: "$Cliente_Info",

            },
            {
                $lookup:{
                    from:"automovil",
                    localField:"ID_Automovil_id",
                    foreignField:"ID_Automovil",
                    as: "Automovil_Info",
                },
            },
            {
                $unwind: "$Automovil_Info",
            },
            {
                $project: {
                    _id: 0,
                    "Client_Info._id":0,
                    "Automovil_Info._id":0,
                    "Cliente_Info.ID_Cliente":0,
                    "Automovil_Info.ID_Automovil":0,
                },
            },
        ])
        .toArray();
        res.send(data);
        //FALTA POR TERMINAR LAS OTRAS CONSULTAS
    } catch (error) {
        
    }
})