import { registerUser, loginUser } from "../services/users.service";
import express, { Request, Response } from "express";

export const signup = async (req: Request, res: Response) => {
  try {
    const { u_id, image, firstName, lastName, mobileNo, email, password } =
      req.body;
    const user = await registerUser(
      u_id,
      image,
      firstName,
      lastName,
      mobileNo,
      email,
      password
    );
    if (user) {
      res.status(200).json({ message: "user reister successfully" });
    } else {
      res.status(409).json({ message: `user already exist with ${email}` });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const signin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await loginUser(email, password);
    if (user) {
      res.status(200).json({ message: "login success" });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (err) {
    res.status(401).json({ message: "Anauthorized" });
  }
};
