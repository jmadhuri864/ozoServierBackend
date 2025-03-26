import mongoose from "mongoose";

export interface Booking{
    u_id:mongoose.Types.ObjectId;
    s_id:mongoose.Types.ObjectId;
    bookingDataTime:Date;
    status:string[];
}
