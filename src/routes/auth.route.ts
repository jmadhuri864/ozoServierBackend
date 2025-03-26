import {Router} from "express"
import { validateDto } from "../middlewares/validateDto.middleware";
import { LoginDto, SignUpDto } from "../dtos/auth.dto";

import {  signIn, signUp } from "../controllers/auth.controller";

const authRoute = Router();

authRoute.post("/signup", validateDto(SignUpDto), signUp);
authRoute.post("/login", validateDto(LoginDto), signIn);
export default authRoute;
