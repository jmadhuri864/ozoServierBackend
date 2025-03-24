import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { LoginDto } from "../dto/login.dto";
import { User } from "../models/user.models";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;

if (!JWT_SECRET) {
   new Error("JWT_SECRET is missing in the .env file");
}


export const logService = async (data: LoginDto) => {
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
