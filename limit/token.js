import 'reflect-metadata';
import {plainToClass, classToPlain } from 'class-transformer';
import dotenv from 'dotenv';
import {Alquiler} from "../dtocontroller/alquiler.js"
import {Automovil} from "../dtocontroller/automovil.js"
import {Router} from 'express';
import { SignJWT, jwtVerify } from 'jose';

dotenv.config("../");

const appToken = Router();
const appVerify= Router();
const DTO = (p1)=>{
    const match = {
        'Alquiler':Alquiler,
        'automovil': Automovil,
    };
    const inst = match[p1];
    if(!inst) throw {status:404, message:"Token solicitado no es valido"}
    return {atributos: plainToClass(inst,{},{ignoreDecorators:true}),class:inst}
};

appToken.use("/:collection", async(req,res)=>{
    try {
        let inst =  plainToClass(eval(req.params.collection), {}, { ignoreDecorators: true })
        if(!inst){
            res.status(404).send({status:404, message:"Token no valido"});
            return
        };
        const encoder = new TextEncoder();
        const jwtconstructor = new SignJWT(Object.assign({}, classToPlain(inst)));
        const jwt = await jwtconstructor
        .setProtectedHeader({alg:"HS256", typ: "JWT"})
        .setIssuedAt()
        .setExpirationTime("30m")
        .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
        res.status(201).send({status:201,jwt});
        } catch (error) {
        res.status(404).send({status: 404, message: "Token solicitado no valido"});
    }
});

appVerify.use("/", async(req,res,next)=>{
    const {authorization} = req.headers;
    if (!authorization) return res.status(400).send({status: 400, token: "Token no enviado"});
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            authorization,
            encoder.encode(process.env.JWT_PRIVATE_KEY)
        );
        req.data = jwtData;
        next();
    } catch (error) {
        res.status(498).send({status: 498, token: "Token caducado"});
    }
})

export {
    appToken,
    appVerify,
    DTO
};