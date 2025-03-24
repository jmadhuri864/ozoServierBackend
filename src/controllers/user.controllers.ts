import { Request, Response } from "express";
import { createUser } from "../service/user.service";

export const signUpController = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const userData = req.body;
    const signUp = await createUser(userData);
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