import express from "express";
import { signUp,signIn} from "../controllers/auth.controller";
import { validateDto } from "../middlewares/validateDto.middleware";
import { SignUpDto } from "../dtos/auth.dto";
import { LoginDto } from "../dtos/auth.dto";
const authRoute = express.Router();

authRoute.post("/signup", validateDto(SignUpDto),signUp);
authRoute.post("/login", validateDto(LoginDto),signIn);

export default authRoute;
