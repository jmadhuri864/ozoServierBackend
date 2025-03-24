import {Router} from "express"
import { signUpController } from "../controllers/user.controllers";
import { validateDto } from "../middlewere/validateDto.middlewere";
import { UserDto } from "../dto/user.dto";
import { LoginDto } from "../dto/login.dto";
import { loginController } from "../controllers/login.controller";

const userRoute = Router();

userRoute.post("/signup", validateDto(UserDto), signUpController);
userRoute.post("/login", validateDto(LoginDto), loginController);
export default userRoute;