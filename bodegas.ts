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

    



    @Transform(({value}) => parseInt(value),{toClassOnly:true})
    id:number;
    @Type(()=>String)
    nombre:string;
    @Transform(({value}) => parseInt(value),{toClassOnly:true})
    id_responsable:number;
    @Transform(({value}) => parseInt(value),{toClassOnly:true})
    estado:number;
    @Transform(({value}) => parseInt(value),{toClassOnly:true})
    created_by:number;
    @Transform(({value}) => parseInt(value),{toClassOnly:true})
    update_by:number;


    constructor(id:number,nombre:string,id_responsable:number, estado:number,created_by:number,update_by:number,created_at:Date,update_at:Date,delete_at:Date){
        this.id=id;
        this.nombre=nombre;
        this.id_responsable=id_responsable;
        this.estado=estado;
        this.created_by=created_by;
        this.update_by=update_by;
        this.created_at=created_at;
        this.update_at=update_at;
        this.delete_at=delete_at;

    }
}