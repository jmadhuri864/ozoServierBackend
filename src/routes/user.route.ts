import express from "express";
import { validateDto } from "../middlewares/validateDto.middleware";
import { UserDto } from "../dtos/user.dto";
import { authenticateUser } from "../middlewares/auth.middleware";
import { updateUser } from "../controllers/user.controller";
export const userRuote = express.Router();

userRuote.patch(
  "/userupdate",
  validateDto(UserDto),
  authenticateUser,
  updateUser
);
