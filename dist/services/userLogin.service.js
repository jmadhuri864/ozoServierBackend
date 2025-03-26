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
exports.signIn = void 0;
const user_model_1 = require("../models/user.model");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const signIn = (login) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_model_1.userModel.findOne({ email: login.email });
        if (!user) {
            return { status: 401, message: 'Unauthorized' };
        }
        const isMatch = yield bcryptjs_1.default.compare(login.password, user.password);
        if (isMatch) {
            const token = jsonwebtoken_1.default.sign({ email: user.email, _id: user._id }, process.env.JWT_SECRET);
            return { status: 200, message: `login suceesfully`, token };
        }
        else {
            return { status: 401, message: 'invalid password' };
        }
    }
    catch (error) {
        throw error;
    }
});
exports.signIn = signIn;
