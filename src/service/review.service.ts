import { ReviewDto } from "../dto/review.dto";
import { Booking } from "../models/booking.models";
import { Review } from "../models/review.models";

export const createReview = async (data: ReviewDto, paramsData: any) => {
  try {
    const { userid, serviceid } = paramsData;

    const bookinngExit = await Booking.find({
      $and: [{ userId: userid }, { serviceId: serviceid }],
    });

    console.log(bookinngExit);

    if (bookinngExit.length === 0) {
      return false;
    }

    const newReviw = new Review({
      userId: userid,
      serviceId: serviceid,
      rating: data.rating,
      description: data.description,
    });

    const saveReview = await newReviw.save();
    return true;
  } catch (error) {
    return { message: "Something wrong" };
  }
};
