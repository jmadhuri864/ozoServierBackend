import { User } from "../models/user.model";
import express from "express";

export const registerUser = async (
  u_id: Number,
  image: String,
  firstName: String,
  lastName: String,
  mobileNo: String,
  email: String,
  password: String
) => {
  try {
    const user = await User.findOne({ email });
    console.log(user);
    
    if (!user) {
        const newUser = new User({
            u_id,
            firstName,
            lastName,
            image,
            mobileNo,
            email,
            password,
          });
          const savedUser = await newUser.save();
          console.log(savedUser);
          
          return true;
        }

      return false;
    
    
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (email: String, password: String) => {
  try {
    console.log(email);
    const user = await User.findOne({ email });
    console.log("1", password);
    console.log("2", user);
    if (!user) {
      return false;
    }
    if (user.password === password) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    return { message: "invalid credetails" };
  }
};
