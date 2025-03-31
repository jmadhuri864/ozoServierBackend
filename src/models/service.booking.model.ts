import mongoose from "mongoose";
import { IBooking } from "../interfaces/service.booking.interface";

const bookingSchema = new mongoose.Schema<IBooking>({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  serviceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service",
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Processing", "Delivery"],
    required: true,
    default: "Pending",
  },
});

export const Booking = mongoose.model<IBooking>('ServiceBooking', bookingSchema);
