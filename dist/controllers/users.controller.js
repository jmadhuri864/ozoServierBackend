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
exports.signin = exports.signup = void 0;
const users_service_1 = require("../services/users.service");
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { u_id, image, firstName, lastName, mobileNo, email, password } = req.body;
        const user = yield (0, users_service_1.registerUser)(u_id, image, firstName, lastName, mobileNo, email, password);
        if (user) {
            res.status(200).json({ message: "user reister successfully" });
        }
        else {
            res.status(409).json({ message: `user already exist with ${email}` });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.signup = signup;
const signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield (0, users_service_1.loginUser)(email, password);
        if (user) {
            res.status(200).json({ message: "login success" });
        }
        else {
            res.status(401).json({ message: "Invalid email or password" });
        }
    }
    catch (err) {
        res.status(401).json({ message: "Anauthorized" });
    }
});
exports.signin = signin;
