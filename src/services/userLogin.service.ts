
import { LoginUserDto } from "../dtos/auth.dto";
import { userModel } from "../models/user.model";
import dotenv from 'dotenv';
dotenv.config();
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signIn = async (login: LoginUserDto) => {
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
