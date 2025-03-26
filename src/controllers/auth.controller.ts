
import { SignUpDto, LoginDto } from "../dtos/auth.dto";
import { Request,Response } from "express";
import { registerUser , signInService } from "../services/auth.service";
import { validateDto } from "../middlewares/validateDto.middleware";
import { promises } from "dns";
import { User } from "../interfaces/user.interface";

export const signUp = async (req: Request, res: Response): Promise<any> => {
  try {
    const dto:SignUpDto=req.body;
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


export const signIn = async (req: Request, res: Response) :Promise<any>=> {
  try {
    const login:LoginDto= req.body;
    const user = await signInService(login);
    return res.status(user.status).json(user);
  } catch (error:any) {
   return
    res.status(500).json({ message: error.message || "Internal Server Error" })
  }
};
