import mongoose from "mongoose";

export interface Review {
  u_id: mongoose.Types.ObjectId;
  b_id: mongoose.Types.ObjectId;
  s_id: mongoose.Types.ObjectId;
  description: string;
  rating: number;
  timeStamp: Date;
}
