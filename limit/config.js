import rateLimit from "express-rate-limit";
export let configGet = ()=>{
    return rateLimit({
        windowMs: 30 * 1000,
        max: 5,
        standardHeaders: true, 
        legacyHeaders: false, 
        skip: (req,res)=>{
            if(req.headers["content-length"]>91){
                res.status(413).send({
                    status:413, 
                    message: "EL tamaño es incorrecto"
                });
                return true;
            }
        }, 
        message: (req,res)=>{
            res.status(429).send({
                status: 429, 
                message: "No puede ingresar al proyecto"
            });
        }
    })    
}