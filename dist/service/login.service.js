"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logService = void 0;
const user_models_1 = require("../models/user.models");
const logService = async (data) => {
    try {
        const userExit = await user_models_1.User.findOne({ emailAddress: data.emailAddress });
        if (!userExit) {
            return null;
        }
        if (userExit.password === data.password) {
            return userExit;
        }
        else {
            return null;
        }
    }
    catch (error) {
        return { message: "Faild to login" };
    }
};
exports.logService = logService;
