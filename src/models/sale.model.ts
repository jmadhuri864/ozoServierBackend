
import mongoose from "mongoose";
import { userModel } from "./user.model";
import { titleModel } from "./title.model";
import { categoryModel } from "./category.model";
import { Sale } from "../interfaces/sale.interface";
import { type } from "os";

const saleSchema = new mongoose.Schema<Sale>({
  u_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
      },
  t_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Title",
    required: true
      },
  c_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  itemImage: {
    type: [String],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  condition: {
    type: String,
    enum: ["Fixed", "Negotiable"],
    default: "Fixed",
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});


export const saleModel= mongoose.model<Sale>("Sale", saleSchema);
