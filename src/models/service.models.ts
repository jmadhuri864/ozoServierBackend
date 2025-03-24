import mongoose from "mongoose";
import { IService } from "../interface/service.interface";

const serviceSchema = new mongoose.Schema<IService>(
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
            default : 'Per Hour'
        },
        availability : {
            type : String,
            enum : ['Morning : 9 To 12', 'Afternoon : 2 To 4', 'Evening : 4 To 6'],
            default : 'Morning : 9 To 12'
        },
        itemPhoto : {
            type: [String],
             required: true
        },
        address : {
            type : String,
            required : true
        }

    }
)

export const Service = mongoose.model<IService>("Service", serviceSchema);