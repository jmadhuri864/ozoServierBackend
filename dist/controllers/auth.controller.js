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
exports.signIn = exports.signUp = void 0;
const auth_service_1 = require("../services/auth.service");
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        const signUp = yield (0, auth_service_1.registerUser)(userData);
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
});
exports.signUp = signUp;
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const logiData = req.body;
        console.log(logiData);
        const login = yield (0, auth_service_1.signInService)(logiData);
        console.log(login);
        if (!login) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json(login);
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.signIn = signIn;
// export const logOut=async(req:any,res:any)=>{
//   try
//   {
//     const token = req.headers.authorization?.split(" ")[1];
//     const login = await blackListeToken(token,3600);
//     return res.status(200).json({ message: "Logged out successfully" });
//   }
//   catch(error)
//   {
//     return res.status(500).json({ message: "Server Error" });
//   }
// }
