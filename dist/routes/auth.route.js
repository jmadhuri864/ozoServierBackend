"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validateDto_middleware_1 = require("../middlewares/validateDto.middleware");
const auth_dto_1 = require("../dtos/auth.dto");
const auth_controller_1 = require("../controllers/auth.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const express_1 = __importDefault(require("express"));
const multer_middleware_1 = require("../middlewares/multer.middleware");
const authRoute = express_1.default.Router();
authRoute.post("/signup", multer_middleware_1.upload.single("image"), (0, validateDto_middleware_1.validateDto)(auth_dto_1.SignUpDto), auth_controller_1.signUp);
authRoute.post("/login", (0, validateDto_middleware_1.validateDto)(auth_dto_1.LoginDto), auth_controller_1.signIn);
authRoute.post("/logout", auth_middleware_1.authMiddleware, auth_controller_1.logout);
authRoute.post("/send-otp", auth_middleware_1.authMiddleware, auth_controller_1.sendOTPController);
authRoute.post("/verify-otp", auth_middleware_1.authMiddleware, auth_controller_1.verifyOTPController);
authRoute.post("/reset-password", auth_middleware_1.authMiddleware, auth_controller_1.resetPasswordController);
exports.default = authRoute;
