import dotenv from "dotenv";
import express from "express";
import appAlquiler from "./routers/alquiler.js";
import storageAutomovil from "./routers/automovil.js";
import { appToken, appVerify } from "./limit/token.js";
dotenv.config();
const app = express()

app.use(express.json());
app.use("/token", appToken)
app.use("/alquiler", appVerify , appAlquiler)
app.use("/automovil", appVerify , storageAutomovil)



const config = JSON.parse(process.env.MY_SERVER);
app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
})