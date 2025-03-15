import mongoose from "mongoose";
import { user } from "../interfaces/user.interface";

import { type } from "os";

const userSchema = new mongoose.Schema<user>({
  u_id: {
    type: Number,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  mobileNo: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
  
},{timestamps:true});

export const User = mongoose.model<user>("User", userSchema);
