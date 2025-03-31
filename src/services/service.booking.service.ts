import path from "path";
import { BookingDto } from "../dtos/service.booking.dto";
import { Booking } from "../models/service.booking.model";

//Todo : Create Booking
export const createBooking = async (
  data: BookingDto,
  paramsData: any,
  userId: any
) => {
  try {
    const { serviceid } = paramsData;

    const newBooking = new Booking({
      userId: userId,
      serviceId: serviceid,
      time: data.time,
      date: data.date,
      status: data.status,
    });
    const saveBooking = await newBooking.save();
    return { message: "Booking successfully" };
  } catch (error) {
    return { message: "Something went wrong" };
  }
};

//Todo : Get Booking Details
export const getAllBookingService = async (userId: any) => {
  try {
    const bookings = await Booking.find({ userId: userId.userId })
      .populate({
        path: "serviceId",
        select: "setPrice pricePer itemPhoto -_id",
        populate: [
          { path: "titleId", select: "name -_id" },
          { path: "categoryId", select: "name -_id" },
        ],
      })
      .populate("userId", "firstName lastName -_id")
      .select("-_id -__v");

    if (!bookings) {
      return false;
    }

    return bookings;
  } catch (error) {
    return { message: "Something went wrong" };
  }
};
