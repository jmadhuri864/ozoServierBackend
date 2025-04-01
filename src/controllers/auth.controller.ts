import { Request, Response } from "express";
//import { AuthService, logoutService, registerUser, resetPassword, sendOTP, signInService, verifyOTP } from "../services/auth.service";
import { ResetPasswordDto, SendOtpDto, VerifyOtpDto } from "../dtos/auth.dto";
import { validate } from "class-validator";
import { inject, injectable } from "inversify";
import { IAuthControllerInterface } from "../interfaces/auth.interface";
import { AuthService } from "../services/auth.service";

//Todo : SignUp Controller
@injectable()
export class AuthController implements IAuthControllerInterface{

  private auth:AuthService;
constructor(@inject(AuthService) auth:AuthService)
{
  this.auth=auth;
}

/*export const */signUp = async (req: Request, res: Response): Promise<any> => {
  try {
    const userData = req.body;
    const signUp = await this.auth.registerUser(userData);
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

//Todo : SignIn Controller
/*export const */ signIn = async (req: Request, res: Response): Promise<any> => {
  try {
    const logiData = req.body;
    console.log(logiData);

    const login = await this.auth.signInService(logiData);
    console.log(login);

    if (!login) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(login);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

//Todo : Logout Controller
/*export const */logout = async (req: Request, res: Response): Promise<any> => {
  try {
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) return res.status(400).json({ message: "Token required" });

      const result = await this.auth.logoutService(token);
      if (!result.success) return res.status(400).json({ message: result.message });

      return res.json({ message: "Logged out successfully" });
  } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
  }
};

//Todo : SendOTP Controller
/*export const */ sendOTPController = async (req: Request, res: Response) : Promise<any> => {
    try {
        const dto = Object.assign(new SendOtpDto(), req.body);
        const errors = await validate(dto);
        if (errors.length) return res.status(400).json({ errors });

        const message = await this.auth.sendOTP(dto.emailAddress);
        res.json({ message });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

//Todo : VerifyOTP Controller
/*export const */ verifyOTPController = async (req: Request, res: Response) : Promise<any> => {
    try {
        const dto = Object.assign(new VerifyOtpDto(), req.body);
        const errors = await validate(dto);
        if (errors.length) return res.status(400).json({ errors });

        const message = await this.auth.verifyOTP(dto.emailAddress, dto.otp);
        res.json({ message });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

//Todo : ResetPassword Controller
/*export const */ resetPasswordController = async (req: Request, res: Response) : Promise<any> => {
    try {
        const dto = Object.assign(new ResetPasswordDto(), req.body);
        const errors = await validate(dto);
        if (errors.length) return res.status(400).json({ errors });

        const message = await this.auth.resetPassword(dto.emailAddress, dto.otp, dto.newPassword);
        res.json({ message });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

}
