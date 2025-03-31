import mongoose from "mongoose";

import { type } from "os";
import { titleModel } from "./sale.title.model";
import { Category } from "../interfaces/sale.category.interface";

const categorySchema = new mongoose.Schema<Category>({
  cName: {
    type: String,
    required: true,
  },
  t_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Title",
    required: true,
  },
});

export const categoryModel = mongoose.model<Category>(
  "SaleCategory",
  categorySchema
);
