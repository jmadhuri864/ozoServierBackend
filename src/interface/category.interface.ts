import mongoose from "mongoose";

export interface category {
    name : string;
    title : mongoose.Types.ObjectId;
}