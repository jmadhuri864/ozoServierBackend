import mongoose from "mongoose";
import { category } from "../interface/category.interface";

const categorySchema = new mongoose.Schema<category>(
    {
        name : {
            type : String,
        },
        title: { type: mongoose.Schema.Types.ObjectId, ref: 'Title' }
    }
)

export const Category = mongoose.model<category>("Category", categorySchema);