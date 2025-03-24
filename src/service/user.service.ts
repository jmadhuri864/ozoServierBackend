import { User } from "./../models/user.models";
import bcrypt from "bcryptjs";

export const createUser = async (data: any) => {
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
