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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const authenticateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //  console.log(req.body);
        const token = req.header("Authorization");
        console.log(token);
        if (!token)
            return res.status(401).json({ message: "Unauthorized: No token provided" });
        if (!token.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Unauthorized: Invalid token format" });
        }
        const extractedToken = token.replace('Bearer ', "");
        console.log(extractedToken);
        const decoded = jsonwebtoken_1.default.verify(extractedToken, process.env.JWT_SECRET);
        req.body = decoded;
        console.log(req.body);
        next();
    }
    catch (error) {
        console.error("JWT Authentication Error:", error.message);
        res.status(401).json({ message: "Unauthorized: Invalid or expired token" });
    }
});
exports.authenticateUser = authenticateUser;
