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
exports.signInService = exports.registerUser = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = require("../models/user.model");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
dotenv_1.default.config();
//Todo :Regiser user
const registerUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userExit = yield user_model_1.User.findOne({ emailAddress: data.emailAddress });
        if (userExit) {
            return false;
        }
        const hashedPassword = yield bcryptjs_1.default.hash(data.password, 10);
        const newUser = new user_model_1.User({
            profilePhoto: data.profilePhoto,
            lastName: data.LastName,
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
//Todo : Service for
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
    new Error("JWT_SECRET is missing in the .env file");
}
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
        const token = jsonwebtoken_1.default.sign({ userId: userExists._id }, JWT_SECRET, { expiresIn: "1h" });
        return { success: true, message: "Login successful", token };
    }
    catch (error) {
        return { success: false, message: "Failed to login" };
    }
});
exports.signInService = signInService;
// export const blackListeToken=async(token:string,time:number)=>{
//   const expiresAt = new Date(Date.now() + time * 1000);
//     await logOutModel.create({ token, expiresAt });
// }
// export const isBlackListed= async(token:string)=>{
//   const tokenExists = await logOutModel.findOne({ token });
//     return !!tokenExists;  
// }
