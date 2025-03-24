import { BookingDto } from "../dto/booking.dto";
import { Booking } from "../models/booking.models";

//Todo : Create Booking
export const createBooking = async (data: BookingDto, paramsData: any, userId : any) => {
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
export const getAllBookingService = async(userId : any) => {
    try {
        console.log(userId.userId);
        const bookings = await Booking.find({userId : userId.userId});
        if(!bookings)
        {
            return false;
        }

        return bookings;
    } catch (error) {
        
    }
}