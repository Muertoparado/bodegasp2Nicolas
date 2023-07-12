import {Expose, Type, Transform} from 'class-transformer';


export class bodegas {
    @Expose({name:'id'})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly: true})
        id:number;

    @Expose({name:'nombre'})
    @Transform(({value})=>{if(/^[a-z A-Z].$/.test(value)) return value;
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly:true})
        nombre:string;
    @Expose({name:'id_responsable'})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly: true})
        id_responsable:number;   

    @Expose({name:'estado'})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly: true})
        estado:number; 
    @Expose({name:'created_by'})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly: true})
        created_by:number;     

    @Expose({name:'update_by'})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly: true})
        update_by:number; 

    constructor(id:number,nombre:string,id_responsable:number, estado:number,created_by:number,update_by:number,created_at:Date,update_at:Date,delete_at:Date){
        this.id=id;
        this.nombre=nombre;
        this.id_responsable=id_responsable;
        this.estado=estado;
        this.created_by=created_by;
        this.update_by=update_by;

    }
}