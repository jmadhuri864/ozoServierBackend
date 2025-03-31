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
exports.logoutService = exports.signInService = exports.registerUser = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = require("../models/user.model");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const redis_1 = __importDefault(require("../config/redis"));
dotenv_1.default.config();
const registerUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { profilePhoto, lastName, firstName, phoneNumber, emailAddress, password, termsCondition, } = data;
        const userExit = yield user_model_1.User.findOne({ emailAddress });
        if (userExit) {
            return false;
        }
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        const newUser = new user_model_1.User({
            profilePhoto,
            lastName,
            firstName,
            phoneNumber,
            emailAddress,
            password: hashedPassword,
            termsCondition,
        });
        const saveUser = yield newUser.save();
        return true;
    }
    catch (error) {
        return { message: "Faild to create user" };
    }
});
exports.registerUser = registerUser;
//Todo : Service for 
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
    new Error("JWT_SECRET is missing in the .env file");
}
const signInService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userExists = yield user_model_1.User.findOne({ emailAddress: data.emailAddress });
        if (!userExists) {
            return { success: false, message: "User not found" };
        }
        const isMatch = yield bcryptjs_1.default.compare(data.password, userExists.password);
        if (!isMatch) {
            return { success: false, message: "Invalid password" };
        }
        console.log(JWT_SECRET);
        const token = jsonwebtoken_1.default.sign({ userId: userExists._id }, JWT_SECRET, { expiresIn: "1h" });
        return { success: true, message: "Login successful", token };
    }
    catch (error) {
        return { success: false, message: "Failed to login" };
    }
});
exports.signInService = signInService;
const logoutService = (token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const decoded = jsonwebtoken_1.default.decode(token);
        if (!decoded)
            return { success: false, message: "Invalid token" };
        const expiresIn = decoded.exp - Math.floor(Date.now() / 1000);
        if (expiresIn > 0) {
            yield redis_1.default.setex(`blacklist_${token}`, expiresIn, "loggedOut");
        }
        return { success: true, message: "Logout successful" };
    }
    catch (error) {
        return { success: false, message: "Logout failed" };
    }
});
exports.logoutService = logoutService;
