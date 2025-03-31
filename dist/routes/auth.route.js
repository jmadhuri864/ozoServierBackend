"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateDto_middleware_1 = require("../middlewares/validateDto.middleware");
const auth_dto_1 = require("../dtos/auth.dto");
const auth_controller_1 = require("../controllers/auth.controller");
<<<<<<< HEAD
const auth_middleware_1 = require("../middlewares/auth.middleware");
const authRoute = (0, express_1.Router)();
authRoute.post("/signup", (0, validateDto_middleware_1.validateDto)(auth_dto_1.SignUpDto), auth_controller_1.signUp);
authRoute.post("/login", (0, validateDto_middleware_1.validateDto)(auth_dto_1.LoginDto), auth_controller_1.signIn);
authRoute.post("/logout", auth_middleware_1.authMiddleware, auth_controller_1.logout);
=======
const authRoute = (0, express_1.Router)();
authRoute.post("/signup", (0, validateDto_middleware_1.validateDto)(auth_dto_1.SignUpDto), auth_controller_1.signUp);
authRoute.post("/login", (0, validateDto_middleware_1.validateDto)(auth_dto_1.LoginDto), auth_controller_1.signIn);
//authRoute.get("/logout",authenticateUser,logOut)
>>>>>>> e260e265d5e07f3cb406760e0317df0d8a3e88c8
exports.default = authRoute;
