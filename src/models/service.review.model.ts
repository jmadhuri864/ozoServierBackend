import mongoose from "mongoose";
import { IReview } from "../interfaces/service.review.interface";

const reviewSchema = new mongoose.Schema<IReview>({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  serviceId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  description: {
    type: String,
  },
});

export const Review = mongoose.model<IReview>('ServiceReview', reviewSchema);
