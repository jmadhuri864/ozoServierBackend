import mongoose from "mongoose";
import { Title } from "../interfaces/sale.title.interface";

const titleSchema = new mongoose.Schema<Title>({
  tName: {
    type: String,
    unique: true,
    required: true,
  },
});

export const titleModel = mongoose.model<Title>("Title", titleSchema);
