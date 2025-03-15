import mongoose from "mongoose";
import { service } from "../interface/service.interface";

const serviceSchema = new mongoose.Schema<service>(
    {
        userId : {
            type: mongoose.Schema.Types.ObjectId,
             ref: 'User',
            required: true  
        },
        titleId : {
            type: mongoose.Schema.Types.ObjectId,
             ref: 'Title',
            required: true
        },
        categoryId : {
            type: mongoose.Schema.Types.ObjectId,
             ref: 'Category',
            required: true
        },
        setPrice : {
            type : Number,
            required : true
        },
        pricePer : {
            type: String,
            enum: ['Per Hour', 'Per Day', 'Fix Rate'],
        },
        availability : {
            type : String,
            enum : ['Morning : 9 To 12 ', 'Afternoon : 2 To 4', 'Evening : 4 To 6']
        },
        itemPhoto : {
            type : String,
            required : true
        },
        address : {
            type : String,
            required : true
        }

    }
)

export const Service = mongoose.model<service>("Service", serviceSchema);