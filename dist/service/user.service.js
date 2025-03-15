"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logIn = exports.createAcc = void 0;
const user_models_1 = require("./../models/user.models");
//import { user } from "../interface/user.interface"
const createAcc = async (data) => {
    try {
        const { profilePhoto, lastName, firstName, phoneNumber, emailAddress, password, termsCondition } = data;
        console.log(data);
        const userExit = await user_models_1.User.findOne({ emailAddress });
        if (userExit) {
            return { message: "User already exit...please signin" };
        }
        console.log(data);
        const newUser = new user_models_1.User({
            profilePhoto,
            lastName,
            firstName,
            phoneNumber,
            emailAddress,
            password,
            termsCondition
        });
        console.log(newUser);
        const saveUser = await newUser.save();
        return { message: "Account created successfully", saveUser };
    }
    catch (error) {
        return { message: "Faild to create user" };
    }
};
exports.createAcc = createAcc;
const logIn = async (data) => {
    try {
        const { emailAddress, password } = data;
        const userExit = await user_models_1.User.findOne({ emailAddress });
        if (!userExit) {
            return { message: "invalid credentials" };
        }
        if (userExit.password === password) {
            return { message: "Login Successful" };
        }
        else {
            return { message: "invalid credintials" };
        }
    }
    catch (error) {
        return { message: "Faild to login" };
    }
};
exports.logIn = logIn;
