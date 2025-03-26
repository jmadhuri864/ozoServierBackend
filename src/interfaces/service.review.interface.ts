import mongoose from "mongoose";

export interface IReview {
    userId : mongoose.Types.ObjectId;
    serviceId : mongoose.Types.ObjectId;
    rating : number;
    description : string;
}