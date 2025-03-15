import mongoose from "mongoose";
import { title } from "../interface/title.interface";

const titleSchema = new mongoose.Schema<title>({
    name: { type: String, required: true }
},{ timestamps: true });

export const Title = mongoose.model<title>('Title', titleSchema);