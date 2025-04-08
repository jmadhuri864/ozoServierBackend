import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model";
import bcrypt from "bcryptjs";
import { LoginDto, SignUpDto } from "../dtos/auth.dto";
import { Blacklist } from "../models/blacklist.model";
import { generateOTP } from "../utils/otp.util";
import { sendMail, sendWelcomeEmail } from "../utils/mail.util";
dotenv.config();

//Todo : Service for Register
export const registerUser = async (data: SignUpDto) => {
  try {
    if (data.termsCondition == false) {
      return {
        status: 400,
        message: "please set terms and condition field as true",
      };
    }
    const userExit = await User.findOne({ emailAddress: data.emailAddress });
    if (userExit) {
      return { status: 404, message: "user already exist" };
    }
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const newUser = new User({
      ...data,
      password: hashedPassword,
    });

    await sendWelcomeEmail(newUser.emailAddress, newUser.firstName);

    const saveUser = await newUser.save();
    return { status: 201, message: "register successfully" };
  } catch (error) {
    return { status: 500, message: "Failed to create user" };
  }
};

//Todo : Service for SignIn
const JWT_SECRET = process.env.JWT_SECRET as string;
if (!JWT_SECRET) {
  new Error("JWT_SECRET is missing in the .env file");
}
export const signInService = async (data: LoginDto) => {
  try {
    const userExists = await User.findOne({ emailAddress: data.emailAddress });

    console.log(userExists);

    if (!userExists) {
      return { message: "User not found", status: 400 };
    }

    const isMatch = await bcrypt.compare(data.password, userExists.password);
    if (!isMatch) {
      return { message: "Invalid password", status: 400 };
    }

    console.log(JWT_SECRET);
    const token = jwt.sign({ userId: userExists._id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    return { message: "Login successful", status: 200, token: token };
  } catch (error) {
    return { message: "Failed to login", status: 500 };
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

  return "OTP sent successfully";
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
