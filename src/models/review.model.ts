import mongoose from 'mongoose'
import {User} from './user.model'
import { Sale } from './sale.model'
import { review } from '../interfaces/review.interface';

const reviewSchema=new mongoose.Schema<review>({
    r_id:{
        type:Number,
        required:true,
        unique:true
    },
    u_id:{
        type:Number,
        ref:'User',
        required:true
    },
    s_id:{
        type:Number,
        ref:'Sale',
        required:true
    },
    description:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        min:1,
        max:5,
        required:true
    }
});

export const Review=mongoose.model<review>('Review',reviewSchema);
