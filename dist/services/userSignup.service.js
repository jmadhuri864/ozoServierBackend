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
exports.registerUser = void 0;
const user_model_1 = require("../models/user.model");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const registerUser = (userInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.userModel.findOne({ email: userInfo.email });
    console.log(user);
    if (!user) {
        const hashedPassword = yield bcryptjs_1.default.hash(userInfo.password, 10);
        const newUser = new user_model_1.userModel({
            image: userInfo.image,
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            mobileNo: userInfo.mobileNo,
            email: userInfo.email,
            password: hashedPassword
        });
        const savedUser = yield newUser.save();
        console.log(savedUser);
        return newUser;
    }
    throw new Error("User already exist ");
});
exports.registerUser = registerUser;
