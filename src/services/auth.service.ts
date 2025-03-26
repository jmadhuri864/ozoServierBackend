import { userModel } from "../models/user.model";
import express from "express";
import { User } from "../interfaces/user.interface";
import bcrypt from 'bcryptjs'
import { LoginDto } from "../dtos/auth.dto";
import jwt from 'jsonwebtoken'

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

export const signInService = async (login: LoginDto) => {
  try {
    const user = await userModel.findOne({ email: login.email });
    if (!user) {
      return {status:401,message:'Unauthorized'};

    }
    const isMatch=await bcrypt.compare(login.password,user.password)
    if (isMatch) {
      const token=jwt.sign({email:user.email,_id:user._id},process.env.JWT_SECRET as string);
      return {status:200,message:`login suceesfully`,token};
    } else {
      return {status:401,message:'invalid password'};
    }
  } catch (error) {
    throw error;
  }
};

