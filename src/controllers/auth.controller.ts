import { Request, Response } from "express";
import { registerUser, signInService } from "../services/auth.service";

export const signUp = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const userData = req.body;
    const signUp = await registerUser(userData);
    if (signUp) {
      return res.status(201).json({ message: "Registration successfully"});
    } else {
      return res
        .status(400)
        .json({ message: "User already exit please signin" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const signIn = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const logiData = req.body;

    const login = await signInService(logiData);
    if (!login) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(login);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};


