import mongoose from "mongoose";
import { review } from "../interface/review.interface";

const reviewSchema = new mongoose.Schema<review>(
    {
        user : {
            type : mongoose.Schema.Types.ObjectId,
            required : true
        },
        service : {
            type : mongoose.Schema.Types.ObjectId,
            required : true
        },
        rating : {
            type : Number,
            min : 1,
            max : 5,
            required : true
        },
        description : {
            type : String
        }
    }
)

export const Review = mongoose.model<review>('Review', reviewSchema);