import express from 'express';
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import {bodegas} from '../controller/bodegas.js'

const proxyBodegas = express();
proxyBodegas.use((req,res,next)=>{
    try {
        let data = plainToClass(bodegas, req.body, {excludeExtraneousValues: true});
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (error) {
        res.status(error.status).send(error);
        
    }
})

export default proxyBodegas;