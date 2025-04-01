import { Router } from "express";
import { validateDto } from "../middlewares/validateDto.middleware";
import { LoginDto, SignUpDto } from "../dtos/auth.dto";
import { AuthController } from "../controllers/auth.controller";
//import {  logout, resetPasswordController, sendOTPController, signIn, signUp, verifyOTPController } from "../controllers/auth.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { inject, injectable } from "inversify";


@injectable()
export class AuthRoute{
    public authRoute:Router;
    constructor(@inject(AuthController) private authController: AuthController) {
        this.authRoute = Router();
        this.configureRoutes();
        
    }


private configureRoutes = (): void => {
    this.authRoute.post("/signup", validateDto(SignUpDto), this.authController.signUp);

    this.authRoute.post("/signup", validateDto(SignUpDto), this.authController.signUp);
    this.authRoute.post("/login", validateDto(LoginDto), this.authController.signIn);
    this.authRoute.post("/logout", authMiddleware, this.authController.logout);

    this.authRoute.post("/send-otp", authMiddleware, this.authController.sendOTPController);
    this.authRoute.post("/verify-otp", authMiddleware, this.authController.verifyOTPController);
    this.authRoute.post("/reset-password", authMiddleware, this.authController.resetPasswordController)

}

}

 