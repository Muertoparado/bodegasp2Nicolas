import express from 'express';
import appBodega from './routers/bodegas.js';
const appExpress = express();

appExpress.use("/bodegas", appBodega);
const config ={
    hostname:"127.3.3.3",
    port: 5020
}

appExpress.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`)
});