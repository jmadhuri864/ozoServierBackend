"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const user_models_1 = require("./../models/user.models");
//import { user } from "../interface/user.interface"
const createUser = async (data) => {
    try {
        const { profilePhoto, lastName, firstName, phoneNumber, emailAddress, password, termsCondition } = data;
        //  console.log(data);
        const userExit = await user_models_1.User.findOne({ emailAddress });
        if (userExit) {
            return false;
        }
        //  console.log(data);
        const newUser = new user_models_1.User({
            profilePhoto,
            lastName,
            firstName,
            phoneNumber,
            emailAddress,
            password,
            termsCondition
        });
        //   console.log(newUser);
        const saveUser = await newUser.save();
        return true;
    }
    catch (error) {
        return { message: "Faild to create user" };
    }
};
exports.createUser = createUser;
