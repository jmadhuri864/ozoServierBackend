"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
<<<<<<< HEAD
exports.resetPasswordController = exports.verifyOTPController = exports.sendOTPController = exports.logout = exports.signIn = exports.signUp = void 0;
const auth_service_1 = require("../services/auth.service");
const auth_dto_1 = require("../dtos/auth.dto");
const class_validator_1 = require("class-validator");
//Todo : SignUp Controller
=======
<<<<<<< HEAD
exports.logout = exports.signIn = exports.signUp = void 0;
const auth_service_1 = require("../services/auth.service");
//Todo : SignUp Controller
=======
exports.signIn = exports.signUp = void 0;
const auth_service_1 = require("../services/auth.service");
>>>>>>> e260e265d5e07f3cb406760e0317df0d8a3e88c8
>>>>>>> b83403378b623a4769b06cc45b8a9b9ed2439352
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;
        const signUp = yield (0, auth_service_1.registerUser)(userData, imageUrl);
        if (signUp) {
            return res.status(201).json({ message: "Registration successfully" });
        }
        else {
            return res
                .status(400)
                .json({ message: "User already exit please signin" });
        }
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.signUp = signUp;
<<<<<<< HEAD
//Todo : SignIn Controller
=======
<<<<<<< HEAD
//Todo : SignIn Controller
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const logiData = req.body;
        const login = yield (0, auth_service_1.signInService)(logiData);
=======
>>>>>>> b83403378b623a4769b06cc45b8a9b9ed2439352
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const logiData = req.body;
        console.log(logiData);
        const login = yield (0, auth_service_1.signInService)(logiData);
        console.log(login);
>>>>>>> e260e265d5e07f3cb406760e0317df0d8a3e88c8
        if (!login) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json(login);
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.signIn = signIn;
<<<<<<< HEAD
//Todo : Logout Controller
=======
<<<<<<< HEAD
>>>>>>> b83403378b623a4769b06cc45b8a9b9ed2439352
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
<<<<<<< HEAD
        if (!token)
            return res.status(400).json({ message: "Token required" });
        const result = yield (0, auth_service_1.logoutService)(token);
        if (!result.success)
            return res.status(400).json({ message: result.message });
        return res.json({ message: "Logged out successfully" });
    }
    catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
});
exports.logout = logout;
//Todo : SendOTP Controller
const sendOTPController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dto = Object.assign(new auth_dto_1.SendOtpDto(), req.body);
        const errors = yield (0, class_validator_1.validate)(dto);
        if (errors.length)
            return res.status(400).json({ errors });
        const message = yield (0, auth_service_1.sendOTP)(dto.emailAddress);
        res.json({ message });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.sendOTPController = sendOTPController;
//Todo : VerifyOTP Controller
const verifyOTPController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dto = Object.assign(new auth_dto_1.VerifyOtpDto(), req.body);
        const errors = yield (0, class_validator_1.validate)(dto);
        if (errors.length)
            return res.status(400).json({ errors });
        const message = yield (0, auth_service_1.verifyOTP)(dto.emailAddress, dto.otp);
        res.json({ message });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.verifyOTPController = verifyOTPController;
//Todo : ResetPassword Controller
const resetPasswordController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dto = Object.assign(new auth_dto_1.ResetPasswordDto(), req.body);
        const errors = yield (0, class_validator_1.validate)(dto);
        if (errors.length)
            return res.status(400).json({ errors });
        const message = yield (0, auth_service_1.resetPassword)(dto.emailAddress, dto.otp, dto.newPassword);
        res.json({ message });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.resetPasswordController = resetPasswordController;
=======
        if (!token) {
            return res.status(400).json({ message: "Token missing" });
        }
        const result = yield (0, auth_service_1.logoutService)(token);
        return res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.logout = logout;
=======
// export const logOut=async(req:any,res:any)=>{
//   try
//   {
//     const token = req.headers.authorization?.split(" ")[1];
//     const login = await blackListeToken(token,3600);
//     return res.status(200).json({ message: "Logged out successfully" });
//   }
//   catch(error)
//   {
//     return res.status(500).json({ message: "Server Error" });
//   }
// }
>>>>>>> e260e265d5e07f3cb406760e0317df0d8a3e88c8
>>>>>>> b83403378b623a4769b06cc45b8a9b9ed2439352
