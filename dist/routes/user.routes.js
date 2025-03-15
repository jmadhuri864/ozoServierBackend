"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controllers_1 = require("../controllers/user.controllers");
const route = express_1.default.Router();
route.post("/signup", user_controllers_1.signUp);
route.post("/login", user_controllers_1.login);
exports.default = route;
