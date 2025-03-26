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
exports.signup = void 0;
const userSignup_service_1 = require("../services/userSignup.service");
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dto = req.body;
        const userInfo = {
            image: dto.image,
            firstName: dto.firstName,
            lastName: dto.lastName,
            mobileNo: dto.mobileNo,
            email: dto.email,
            password: dto.password
        };
        const user = yield (0, userSignup_service_1.registerUser)(userInfo);
        return res.status(201).json({ message: "register successfully" });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(409).json({ message: error.message });
        }
        return res.status(500).json({ message: "Internal Server Error" });
    }
});
exports.signup = signup;
