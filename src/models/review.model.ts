import mongoose from 'mongoose'
import {userModel} from './user.model'
import { saleModel } from './sale.model'
import { Review } from '../interfaces/review.interface';

const reviewSchema=new mongoose.Schema<Review>({

    u_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    b_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Booking',
        required:true
    },
    s_id:{
        type:mongoose.Schema.Types.ObjectId,
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

export const reviewModel=mongoose.model<Review>('Review',reviewSchema);
