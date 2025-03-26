import { CreateBookingDto } from "../dtos/sale.booking.dto";
import { bookingModel } from "../models/sale.booking.model";
import { AuthenticatedRequest } from "../middlewares/auth.middleware";

export const createBooking = async (
  validBookingInfo: CreateBookingDto,
  u_id: AuthenticatedRequest
) => {
  try {
    console.log("hiiiii");

    const booking = new bookingModel({
      u_id: u_id,
      s_id: validBookingInfo.s_id,
      bookingDataTime: Date.now(),
      status: validBookingInfo.status,
    });
    console.log(await booking.save());
    console.log("hiiiii");
    return { status: 201, message: "successfully created" };
  } catch (error) {
    return { status: 500, message: "Internal server error" };
  }
};

export const getAllBookingService = async () => {
  try {
    const getAll = await bookingModel.find();
    if (!getAll) {
      return { status: 404, message: "no booking found" };
    }
    return { status: 200, message: "success", data: getAll };
  } catch (error) {
    return { status: 500, message: "Internal server error" };
  }
};
