
import mongoose from "mongoose";
export interface Category{
    t_id:mongoose.Schema.Types.ObjectId;
    cName:string;
}