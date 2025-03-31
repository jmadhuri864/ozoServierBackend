import mongoose from "mongoose";

export interface ICategory {
  name: string;
  title: mongoose.Types.ObjectId;
}
