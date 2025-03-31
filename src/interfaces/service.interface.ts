import mongoose from "mongoose";

export interface IService {
  userId: mongoose.Types.ObjectId;
  titleId: mongoose.Types.ObjectId;
  categoryId: mongoose.Types.ObjectId;
  setPrice: number;
  pricePer: string;
  availability: string;
  itemPhoto: [string];
  address: string;
}
