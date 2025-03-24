import { registerUser } from "../services/userSignup.service";
import { Request, Response } from "express";
import { User } from "../interfaces/user.interface";
import { CreateUserDto } from "../dtos/auth.dto";


export const signup = async (req: Request, res: Response): Promise<any> => {
  try {
    const dto:CreateUserDto=req.body;
    const userInfo:User={
      image:dto.image,
      firstName:dto.firstName,
      lastName:dto.lastName,
      mobileNo:dto.mobileNo,
      email:dto.email,
      password:dto.password

    }
    const user = await registerUser(userInfo);
    return res.status(201).json({ message: "register successfully" });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(409).json({ message: error.message });
    }
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
