import mongoose from 'mongoose'
import {User} from  './user.model'
import { Title } from './title.model'
import { Category } from './category.model'
import { sale } from '../interfaces/sale.interface'
import { type } from 'os'

const saleSchema=new mongoose.Schema<sale>({

    s_id:{
        type:Number,
        required:true,
        unique:true
    },
    u_id:{
        type:Number,
        ref:'User',
        required:true
    },
    t_id:{
        type:Number,
        ref:'Title',
        required:true
    },
    c_id:{
        type:Number,
        ref:'Category',
        required:true
    },
    description:{
        type:String,
        required:true
    },
    itemImage:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    condition:{
        type:String,
        enum:['Fixed','Neotiable'],
        default:'Fixed',
        required:true
    },
    location:{
        type:String,
        required:true
    }
});

export const Sale=mongoose.model<sale>('Sale',saleSchema);