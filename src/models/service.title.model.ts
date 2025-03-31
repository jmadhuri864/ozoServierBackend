import mongoose from "mongoose";
import { ITitle } from "../interfaces/service.title.interface";

const titleSchema = new mongoose.Schema<ITitle>({
    name: { type: String, required: true }
},{ timestamps: true });

export const Title = mongoose.model<ITitle>('ServiceTitle', titleSchema);