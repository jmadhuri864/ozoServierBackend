"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = void 0;
const login_service_1 = require("../service/login.service");
const loginController = async (req, res) => {
    try {
        const logiData = req.body;
        const login = await (0, login_service_1.logService)(logiData);
        if (!login) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json({ message: "Login successfull" });
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.loginController = loginController;
