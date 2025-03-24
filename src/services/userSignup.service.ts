import { userModel } from "../models/user.model";
import express from "express";
import { User } from "../interfaces/user.interface";
import bcrypt from 'bcryptjs'

export const registerUser = async (userInfo: User) => {
  const user = await userModel.findOne({ email: userInfo.email });
  console.log(user);
  if (!user) {
    const hashedPassword=await bcrypt.hash(userInfo.password,10);
    const newUser = new userModel({
      image:userInfo.image,
      firstName:userInfo.firstName,
      lastName:userInfo.lastName,
      mobileNo:userInfo.mobileNo,
      email:userInfo.email,
      password:hashedPassword
    });
    const savedUser = await newUser.save();
    console.log(savedUser);
    return newUser;
  }
  throw new Error("User already exist ");
};
