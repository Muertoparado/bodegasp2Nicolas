import {Router} from 'express';
import proxyBodegas from '../middleware/proxyBodegas.js';
const appBodegas = Router();

appBodegas.get("/", proxyBodegas,(req,res)=>{
    res.send(JSON.stringify(req.body));
})

export default appBodegas;