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
<<<<<<< HEAD
exports.authMiddleware = void 0;
=======
<<<<<<< HEAD
exports.authMiddleware = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const redis_1 = __importDefault(require("../config/redis"));
dotenv_1.default.config();
// export const authenticateUser : any = (req: AuthRequest, res: Response, next: NextFunction) => {
//     const authHeader = req.header("Authorization");
//     if (!authHeader || !authHeader.startsWith("Bearer ")) {
//         return res.status(401).json({ message: "Authorization token is required" });
//     }
//     const token = authHeader.split(" ")[1];
//     try {
//         const decode = jwt.verify(token, process.env.JWT_SECRET as string );
//         req.user = decode ;
//       //  console.log(req.user);
//         next();
//     } catch (error) {
//         return res.status(403).json({message : "Invalid token"});
//     }
// }
const authMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const isBlacklisted = yield redis_1.default.get(`blacklist_${token}`);
        if (isBlacklisted) {
            return res.status(401).json({ message: "Token is invalid, please login again" });
        }
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
});
exports.authMiddleware = authMiddleware;
=======
exports.authenticateUser = void 0;
>>>>>>> b83403378b623a4769b06cc45b8a9b9ed2439352
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const blacklist_model_1 = require("../models/blacklist.model");
dotenv_1.default.config();
const authMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const authHeader = req.header("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Authorization token is required" });
    }
    const token = authHeader.split(" ")[1];
    try {
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const blacklisted = yield blacklist_model_1.Blacklist.findOne({ token });
        if (blacklisted) {
            return res
                .status(401)
                .json({ message: "Token blacklisted. Please log in again." });
        }
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
});
<<<<<<< HEAD
exports.authMiddleware = authMiddleware;
=======
exports.authenticateUser = authenticateUser;
>>>>>>> e260e265d5e07f3cb406760e0317df0d8a3e88c8
>>>>>>> b83403378b623a4769b06cc45b8a9b9ed2439352
