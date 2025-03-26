import mongoose from "mongoose";

export interface IBooking {
    userId : mongoose.Types.ObjectId;
    serviceId : mongoose.Types.ObjectId;
    time : string;
    date : Date;
    status : string;
}