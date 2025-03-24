
import { LoginUserDto } from "../dtos/auth.dto";
import { Request,Response } from "express";
import { signIn } from "../services/userLogin.service";
import { validateDto } from "../middleware/validateDto.middleware";
import { promises } from "dns";


export const signin = async (req: Request, res: Response) :Promise<any>=> {
  try {
    const login:LoginUserDto= req.body;
    const user = await signIn(login);
    return res.status(user.status).json(user);
  } catch (error:any) {
   return
    res.status(500).json({ message: error.message || "Internal Server Error" })
  }
};
