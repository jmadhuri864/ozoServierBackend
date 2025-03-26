import { ReviewDto } from "../dtos/service.review.dto";
import { Booking } from "../models/service.booking.model";
import { Review } from "../models/service.review.model";

//Todo : Post Review
export const createReview = async (data: ReviewDto, paramsData: any, userId: any) => {
  try {
    const { serviceid } = paramsData;
    console.log(serviceid);
    
    const bookingExit = await Booking.find({
      $and: [{ userId: userId }, { serviceId: serviceid }],
    });

    console.log("i am in service layer");

    if (!bookingExit) {
      return false;
    }
    const newReviw = new Review({
      userId: userId,
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

//Todo : Get Review
export const getReview = async (data : any) => {
  try {
       const{ serviceid } = data;
       console.log(data);
       
      const getReview = await Review.find({serviceId : serviceid})
      .populate({
        path : "serviceId",
       // select : "setPrice pricePer itemPhoto -_id", 
        populate : [
          {path : "titleId", select : "name -_id"},
          {path : "categoryId", select : "name -_id"}
        ]
      })
      .populate("userId", "firstName lastName -_id")
      .select('-_id -__v');
    //  console.log(getReview)
      if(!getReview)
      {
        return false;
      }

      return getReview;
  } catch (error) {
    return { message: "Something wrong" };
  }
}
