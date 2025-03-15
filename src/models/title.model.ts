import mongoose from "mongoose";
import {title} from '../interfaces/title.interface'

import { type } from "os";

const titleSchema = new mongoose.Schema<title>({
  t_id: {
    type: Number,
    required: true,
    unique: true,
  },
  tName: {
    type: String,
    required: true,
  }
});

export const Title = mongoose.model<title>("Title", titleSchema);
