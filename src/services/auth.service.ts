import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model";
import bcrypt from "bcryptjs";
import { LoginDto, SignUpDto } from "../dtos/auth.dto";
import { logOutModel } from "../models/logOut.model";
dotenv.config();

//Todo :Regiser user
export const registerUser = async (data: SignUpDto) => {
  try {
    
    const userExit = await User.findOne({emailAddress : data.emailAddress});
    if (userExit) {
      return false;
    }
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const newUser = new User({
      profilePhoto : data.profilePhoto,
      lastName : data.LastName,
      firstName : data.firstName,
      phoneNumber : data.phoneNumber,
      emailAddress : data.emailAddress,
      password: hashedPassword,
      termsCondition : data.termsCondition,
    });

    const saveUser = await newUser.save();
    return true;
  } catch (error) {
    return { message: "Faild to create user" };
  }
};

//Todo : Service for
const JWT_SECRET = process.env.JWT_SECRET as string;
if (!JWT_SECRET) {
   new Error("JWT_SECRET is missing in the .env file");
}
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
    const token = jwt.sign({ userId: userExists._id },JWT_SECRET , { expiresIn: "1h" });

    return { success: true, message: "Login successful", token };
  
  } catch (error) {
    return { success: false, message: "Failed to login" };
  }
};

// export const blackListeToken=async(token:string,time:number)=>{

//   const expiresAt = new Date(Date.now() + time * 1000);
//     await logOutModel.create({ token, expiresAt });

// }

// export const isBlackListed= async(token:string)=>{
//   const tokenExists = await logOutModel.findOne({ token });
//     return !!tokenExists;  

// }
