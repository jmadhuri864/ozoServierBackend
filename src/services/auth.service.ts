import dotenv from "dotenv";
import jwt from "jsonwebtoken";


dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;

if (!JWT_SECRET) {
   new Error("JWT_SECRET is missing in the .env file");
}

import { User } from "../models/user.model";
import bcrypt from "bcryptjs";
import { LoginDto, SignUpDto } from "../dtos/auth.dto";

export const registerUser = async (data: SignUpDto) => {
  try {
    const {
      profilePhoto,
      lastName,
      firstName,
      phoneNumber,
      emailAddress,
      password,
      termsCondition,
    } = data;
    
    const userExit = await User.findOne({ emailAddress });
    if (userExit) {
      return false;
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      profilePhoto,
      lastName,
      firstName,
      phoneNumber,
      emailAddress,
      password: hashedPassword,
      termsCondition,
    });

    const saveUser = await newUser.save();
    return true;
  } catch (error) {
    return { message: "Faild to create user" };
  }
};


export const signInService = async (data: LoginDto) => {
  try {
    const userExists = await User.findOne({ emailAddress: data.emailAddress });

    if (!userExists) {
      return { success: false, message: "User not found" };
    }

    const isMatch = await bcrypt.compare(data.password, userExists.password);
    if (!isMatch) {
      return { success: false, message: "Invalid password" };
    }

    console.log(JWT_SECRET);
    const token = jwt.sign({ userId: userExists._id },JWT_SECRET , { expiresIn: "1h" });

    return { success: true, message: "Login successful", token };
  
  } catch (error) {
    return { success: false, message: "Failed to login" };
  }
};
