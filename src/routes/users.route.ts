import express from "express";
import { signup } from "../controllers/userSignup.controller";
import { signin } from "../controllers/userLogin.controller";
import { validateDto } from "../middleware/validateDto.middleware";
import { CreateUserDto } from "../dtos/auth.dto";
import { LoginUserDto } from "../dtos/auth.dto";
const router = express.Router();

router.post("/register", validateDto(CreateUserDto),signup);
router.post("/login", validateDto(LoginUserDto),signin);

export default router;
