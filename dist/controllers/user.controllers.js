"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.signUp = void 0;
const user_service_1 = require("../service/user.service");
const signUp = async (req, res) => {
    try {
        const signUp = await (0, user_service_1.createAcc)(req.body);
        res.status(201).json(signUp);
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.signUp = signUp;
const login = async (req, res) => {
    try {
        const login = await (0, user_service_1.logIn)(req.body);
        res.status(200).json(login);
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.login = login;
