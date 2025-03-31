import { Router } from "express";
import { validateDto } from "../middlewares/validateDto.middleware";
import { LoginDto, SignUpDto } from "../dtos/auth.dto";

import { signIn, signUp /*logOut*/ } from "../controllers/auth.controller";
import { authenticateUser } from "../middlewares/auth.middleware";

const authRoute = Router();

authRoute.post("/signup", validateDto(SignUpDto), signUp);
authRoute.post("/login", validateDto(LoginDto), signIn);
//authRoute.get("/logout",authenticateUser,logOut)

export default authRoute;
 