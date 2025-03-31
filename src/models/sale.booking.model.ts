import mongoose from "mongoose";
import { User } from "./user.model";
import { saleModel } from "./sale.model";
import { reviewModel } from "./sale.review.model";
import { type } from "os";
import { Booking } from "../interfaces/sale.booking.interface";

const bookingSchema = new mongoose.Schema<Booking>({
  u_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  s_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Sale",
    required: true,
  },
  bookingDataTime: {
    type: Date,
    required: true,
  },
  status: {
    type: [String],
    enum: ["Confirmed", "Completed", "Declained"],
  },
});

export const bookingModel = mongoose.model<Booking>(
  "SaleBooking",
  bookingSchema
);
