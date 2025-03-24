"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpController = void 0;
const user_service_1 = require("../service/user.service");
const signUpController = async (req, res) => {
    try {
        const userData = req.body;
        const signUp = await (0, user_service_1.createUser)(userData);
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
};
exports.signUpController = signUpController;
