import mongoose from "mongoose";

export interface review {
    user : mongoose.Types.ObjectId;
    service : mongoose.Types.ObjectId;
    rating : number;
    description : string;
}