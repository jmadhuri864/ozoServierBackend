import mongoose from "mongoose";
import { booking } from "../interface/booking.interface";

const bookingSchema = new mongoose.Schema<booking>({
    User : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    service : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Service'
    },
    time : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        required : true
    },
    status : {
        type : String,
        enum : ['Pending', 'Processing', 'Delivery'],
        required : true
    }
})

export const Booking = mongoose.model<booking>('Booking', bookingSchema);