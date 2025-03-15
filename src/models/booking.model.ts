import mongoose from "mongoose";
import { User } from "./user.model";
import { Sale } from "./sale.model";
import { Review } from "./review.model";
import { type } from "os";
import { booking } from "../interfaces/booking.interface";

const bookingSchema = new mongoose.Schema<booking>({
  b_id: {
    type: Number,
    required: true,
    unique: true,
  },
  u_id: {
    type: Number,
    ref: "User",
    required: true,
  },
  s_id: {
    type: Number,
    ref: "Sale",
    required: true,
  },
  r_id: {
    type: Number,
    ref: "Review",
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Confirmed", "Completed", "Declaim"],
  },
});

export const Booking = mongoose.model<booking>("Booking", bookingSchema);
