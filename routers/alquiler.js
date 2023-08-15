import { Router } from "express";
import { conex } from "../db/atlas.js";
import { configGet } from "../limit/config.js";

const appAlquiler = Router();

appAlquiler.get("/", async (req, res)=>{
    try {
        const db = await conex();
        const collection = await db.collection("alquiler");
        const data = await collection.find({}).toArray();
        res.send(data);
    } catch (error) {
        console.log(error)
    }   
});


appAlquiler.get("/detallesid", async(req,res)=>{
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
                    _id: 1,
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
export default appAlquiler;



        // const data = await collection.aggregate([
        //     {
        //         $match: {
        //             Estado:"Activo",
        //         },
        //     },
        //     {
        //         $lookup: {
        //             from: "cliente",
        //             localField: "ID_Cliente_id",
        //             foreignField:"ID_Cliente",
        //             as: "Cliente_Info",
        //         },
        //     },
        //     {
        //         $project: {
        //             _id:1,
        //             "Cliente_Info.id":0,
        //             "Cliente_Info.ID_Cliente":0,
        //         },
        //     },

        // ]).toArray();