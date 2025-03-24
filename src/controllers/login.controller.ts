import { Request, Response } from "express";
import { logService } from "../service/login.service";

export const loginController = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const logiData = req.body;

    const login = await logService(logiData);
    if (!login) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(login);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
