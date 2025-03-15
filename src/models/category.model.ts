import mongoose from "mongoose";

import { type } from "os";
import { Title } from "./title.model";
import { category } from "../interfaces/category.interface";

const categorySchema = new mongoose.Schema<category>({
  c_id: {
    type: Number,
    required: true,
    unique: true,
  },
  cName: {
    type: String,
    required: true,
  },
  t_id: {
    type: Number,
    ref: "Title",
    required: true,
  },
});

export const Category = mongoose.model<category>("Category", categorySchema);
