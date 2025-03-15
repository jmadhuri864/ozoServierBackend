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
exports.loginUser = exports.registerUser = void 0;
const user_model_1 = require("../models/user.model");
const registerUser = (u_id, image, firstName, lastName, mobileNo, email, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_model_1.User.findOne({ email });
        console.log(user);
        if (!user) {
            const newUser = new user_model_1.User({
                u_id,
                firstName,
                lastName,
                image,
                mobileNo,
                email,
                password,
            });
            const savedUser = yield newUser.save();
            console.log(savedUser);
            return true;
        }
        return false;
    }
    catch (error) {
        console.log(error);
    }
});
exports.registerUser = registerUser;
const loginUser = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(email);
        const user = yield user_model_1.User.findOne({ email });
        console.log("1", password);
        console.log("2", user);
        if (!user) {
            return false;
        }
        if (user.password === password) {
            return true;
        }
        else {
            return false;
        }
    }
    catch (err) {
        return { message: "invalid credetails" };
    }
});
exports.loginUser = loginUser;
