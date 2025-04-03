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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPassword = exports.verifyOTP = exports.sendOTP = exports.logoutService = exports.signInService = exports.registerUser = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = require("../models/user.model");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const blacklist_model_1 = require("../models/blacklist.model");
const otp_util_1 = require("../utils/otp.util");
const mail_util_1 = require("../utils/mail.util");
dotenv_1.default.config();
//Todo : Service for Register
const registerUser = (data, imageUrl) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { 
        // profilePhoto:imageUrl,
        lastName, firstName, phoneNumber, emailAddress, password, termsCondition, } = data;
        const userExit = yield user_model_1.User.findOne({ emailAddress });
        if (userExit) {
            return false;
        }
        const hashedPassword = yield bcryptjs_1.default.hash(data.password, 10);
        const newUser = new user_model_1.User({
            profilePhoto: imageUrl,
            lastName: data.lastName,
            firstName: data.firstName,
            phoneNumber: data.phoneNumber,
            emailAddress: data.emailAddress,
            password: hashedPassword,
            termsCondition: data.termsCondition,
        });
        const saveUser = yield newUser.save();
        return true;
    }
    catch (error) {
        return { message: "Faild to create user" };
    }
});
exports.registerUser = registerUser;
//Todo : Service for SignIn
const JWT_SECRET = process.env.JWT_SECRET;
// if (!JWT_SECRET) {
//   new Error("JWT_SECRET is missing in the .env file");
// }
const signInService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userExists = yield user_model_1.User.findOne({ emailAddress: data.emailAddress });
        console.log(userExists);
        if (!userExists) {
            return { success: false, message: "User not found" };
        }
        const isMatch = yield bcryptjs_1.default.compare(data.password, userExists.password);
        if (!isMatch) {
            return { success: false, message: "Invalid password" };
        }
        console.log(JWT_SECRET);
        const token = jsonwebtoken_1.default.sign({ userId: userExists._id }, JWT_SECRET, {
            expiresIn: "1h",
        });
        return { success: true, message: "Login successful", token };
    }
    catch (error) {
        return { success: false, message: "Failed to login" };
    }
});
exports.signInService = signInService;
//Todo : Service for Logout
const logoutService = (token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const decoded = jsonwebtoken_1.default.decode(token);
        if (!decoded || !decoded.exp) {
            return { success: false, message: "Invalid token" };
        }
        // Store token in DB until it expire
        yield blacklist_model_1.Blacklist.create({ token, expiresAt: new Date(decoded.exp * 1000) });
        return { success: true, message: "Logged out successfully" };
    }
    catch (error) {
        return { success: false, message: "Failed to logout" };
    }
});
exports.logoutService = logoutService;
//Todo : Service for SendOTP
const sendOTP = (emailAddress) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.findOne({ emailAddress });
    if (!user)
        throw new Error("User not found");
    const otp = (0, otp_util_1.generateOTP)();
    user.otp = otp;
    user.otpExpires = new Date(Date.now() + 10 * 60 * 1000);
    yield user.save();
    yield (0, mail_util_1.sendMail)(emailAddress, "Your OTP Code", `Your OTP is: ${otp}. It is valid for 10 minutes.`);
    return "OTP sent successfully";
});
exports.sendOTP = sendOTP;
//Todo : Service for VerifyOTP
const verifyOTP = (emailAddress, otp) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.findOne({ emailAddress });
    if (!user || user.otp !== otp || new Date() > user.otpExpires) {
        throw new Error("Invalid or expired OTP");
    }
    return "OTP verified successfully";
});
exports.verifyOTP = verifyOTP;
//Todo : Service for ResetPassword
const resetPassword = (emailAddress, otp, newPassword) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.findOne({ emailAddress });
    if (!user || user.otp !== otp || new Date() > user.otpExpires) {
        throw new Error("Invalid or expired OTP");
    }
    user.password = yield bcryptjs_1.default.hash(newPassword, 10);
    user.otp = null;
    user.otpExpires = null;
    yield user.save();
    return "Password updated successfully";
});
exports.resetPassword = resetPassword;
