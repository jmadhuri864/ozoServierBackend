import { Router } from "express";
import { validateDto } from "../middlewares/validateDto.middleware";
import { LoginDto, SignUpDto } from "../dtos/auth.dto";
import {  logout, resetPasswordController, sendOTPController, signIn, signUp, verifyOTPController } from "../controllers/auth.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { upload } from "../config/multer.config";

const authRoute = Router();

authRoute.post("/signup",upload.single("profilePhoto"), validateDto(SignUpDto), signUp);
authRoute.post("/login", validateDto(LoginDto), signIn);
authRoute.post("/logout", authMiddleware, logout);

authRoute.post("/send-otp", authMiddleware, sendOTPController);
authRoute.post("/verify-otp", authMiddleware, verifyOTPController);
authRoute.post("/reset-password", authMiddleware, resetPasswordController)

export default authRoute;
