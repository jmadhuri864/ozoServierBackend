import { Request, Response } from "express";
import { registerUser, signInService ,/*blackListeToken*/} from "../services/auth.service";

export const signUp = async (req: Request, res: Response): Promise<any> => {
  try {
    const userData = req.body;
    const signUp = await registerUser(userData);
    if (signUp) {
      return res.status(201).json({ message: "Registration successfully" });
    } else {
      return res
        .status(400)
        .json({ message: "User already exit please signin" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const signIn = async (req: Request, res: Response): Promise<any> => {
  try {
    const logiData = req.body;
    console.log(logiData);

    const login = await signInService(logiData);
    console.log(login);

    if (!login) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(login);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// export const logOut=async(req:any,res:any)=>{
//   try
//   {
    
//     const token = req.headers.authorization?.split(" ")[1];
//     const login = await blackListeToken(token,3600);
//     return res.status(200).json({ message: "Logged out successfully" });
//   }
//   catch(error)
//   {
//     return res.status(500).json({ message: "Server Error" });
//   }

// }