import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model";
import bcrypt from "bcryptjs";
import { LoginDto, SignUpDto } from "../dtos/auth.dto";
import { Blacklist } from "../models/blacklist.model";
import { generateOTP } from "../utils/otp.util";
import { sendMail } from "../utils/mail.util";
import { injectable } from "inversify";
dotenv.config();

//Todo : Service for Register

export const registerUser = async (data: SignUpDto,imageUrl:any) => {
  try {

    const {
     // profilePhoto:imageUrl,
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
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const newUser = new User({
      profilePhoto : imageUrl,
      lastName : data.lastName,
      firstName : data.firstName,
      phoneNumber : data.phoneNumber,
      emailAddress : data.emailAddress,
      password: hashedPassword,
      termsCondition : data.termsCondition,
    });

    const saveUser = await newUser.save();
console.log();

    await sendMail(
      emailAddress,
      "Registratioin Successfull",
      `You are successfully register with email id ${emailAddress}`
    );

    return true;
  } catch (error) {
    return { message: "Faild to create user" };
  }
};

//Todo : Service for SignIn
 const JWT_SECRET = process.env.JWT_SECRET as string;
// if (!JWT_SECRET) {
//   new Error("JWT_SECRET is missing in the .env file");
// }
export const signInService = async (data: LoginDto) => {
  try {
    const userExists = await User.findOne({ emailAddress: data.emailAddress });

    console.log(userExists);
    

    if (!userExists) {
      return { success: false, message: "User not found" };
    }

    const isMatch = await bcrypt.compare(data.password, userExists.password);
    if (!isMatch) {
      return { success: false, message: "Invalid password" };
    }

    console.log(JWT_SECRET);
    const token = jwt.sign({ userId: userExists._id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    return { success: true, message: "Login successful", token };
  } catch (error) {
    return { success: false, message: "Failed to login" };
  }
};

//Todo : Service for Logout
export const logoutService = async (token: string) => {
  try {
    const decoded = jwt.decode(token) as { exp: number } | null;
    if (!decoded || !decoded.exp) {
      return { success: false, message: "Invalid token" };
    }

    // Store token in DB until it expire
    await Blacklist.create({ token, expiresAt: new Date(decoded.exp * 1000) });

    return { success: true, message: "Logged out successfully" };
  } catch (error) {
    return { success: false, message: "Failed to logout" };
  }
};

//Todo : Service for SendOTP
export const sendOTP = async (emailAddress: string) => {
  const user = await User.findOne({ emailAddress });
  if (!user) throw new Error("User not found");

  const otp = generateOTP();
  user.otp = otp;
  user.otpExpires = new Date(Date.now() + 10 * 60 * 1000);

  await user.save();

  await sendMail(
    emailAddress,
    "Your OTP Code",
    `Your OTP is: ${otp}. It is valid for 10 minutes.`
  );
  return "OTP send successfully";
};

//Todo : Service for VerifyOTP
export const verifyOTP = async (emailAddress: string, otp: string) => {
  const user = await User.findOne({ emailAddress });

  if (!user || user.otp !== otp || new Date() > user.otpExpires!) {
    throw new Error("Invalid or expired OTP");
  }

  return "OTP verified successfully";
};

//Todo : Service for ResetPassword
export const resetPassword = async (
  emailAddress: string,
  otp: string,
  newPassword: string
) => {
  const user = await User.findOne({ emailAddress });

  if (!user || user.otp !== otp || new Date() > user.otpExpires!) {
    throw new Error("Invalid or expired OTP");
  }

  user.password = await bcrypt.hash(newPassword, 10);
  user.otp = null;
  user.otpExpires = null;

  await user.save();

  return "Password updated successfully";
};

