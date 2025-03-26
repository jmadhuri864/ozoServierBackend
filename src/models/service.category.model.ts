import mongoose from "mongoose";
import { ICategory } from "../interfaces/service.category.interface";

const categorySchema = new mongoose.Schema<ICategory>(
    {
        name : {
            type : String,
        },
        title: { type: mongoose.Schema.Types.ObjectId, ref: 'Title' }
    }
)

export const Category = mongoose.model<ICategory>("Category", categorySchema);