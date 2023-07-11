import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import {bodegas} from '../controller/bodegas.js'

let data = plainToClass(bodegas,{excludeExtraneousValues: true});
