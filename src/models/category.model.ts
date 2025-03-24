import mongoose from "mongoose";

import { type } from "os";
import { titleModel } from "./title.model";
import { Category } from "../interfaces/category.interface";

const categorySchema = new mongoose.Schema<Category>({

  cName: {
    type: String,
    required: true,
  },
  t_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Title",
    required: true,
  }
});

export const categoryModel = mongoose.model<Category>("Category", categorySchema);
