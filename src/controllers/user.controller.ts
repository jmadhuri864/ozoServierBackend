import { Request, Response } from "express";
import { updateUserService } from "../services/user.service";
import { AuthRequest } from "../middlewares/auth.middleware";
export const updateUser = async (req: AuthRequest, res: Response) => {
  try {
    const id = req.user.userId;
    console.log(id);

    const updatedData = req.body;
    const updatedUser = await updateUserService(id, updatedData);
    res.status(updatedUser.status).json({ message: updatedUser.message });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
