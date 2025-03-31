
import { CreateReviewDto } from "../dtos/sale.review.dto";
import { AuthRequest } from "../middlewares/auth.middleware";
import { bookingModel } from "../models/sale.booking.model";
import { reviewModel } from "../models/sale.review.model";
export const CreateReview = async (
  review: CreateReviewDto,
  u_id: AuthRequest
) => {
  try {
    const booking = await bookingModel.findOne({
      u_id: u_id,
      s_id: review.s_id,
    });
    console.log(booking);
    if (!booking) {
      return { status: 400, message: "user is not eligible to give review" };
    }
    const newReview = new reviewModel({
      u_id,
      s_id: review.s_id,
      b_id: booking._id,
      description: review.description,
      rating: review.rating,
      timeStamp: Date.now(),
    });
    await newReview.save();
    return { status: 201, message: "successfully created" };
  } catch (error) {
    return { status: 500, message: "Internal server error" };
  }
};

export const getAllReviewService = async () => {
  try {
    const allReview = await reviewModel.find();
    if (!allReview) {
      return { status: 404, message: "no review found" };
    }
    return { status: 200, message: "success", data: allReview };
  } catch (error) {
    return { status: 500, message: "Internal Server Error" };
  }
};
