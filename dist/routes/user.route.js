"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRuote = void 0;
const express_1 = __importDefault(require("express"));
const validateDto_middleware_1 = require("../middlewares/validateDto.middleware");
const user_dto_1 = require("../dtos/user.dto");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const user_controller_1 = require("../controllers/user.controller");
exports.userRuote = express_1.default.Router();
exports.userRuote.patch("/userupdate", (0, validateDto_middleware_1.validateDto)(user_dto_1.UserDto), auth_middleware_1.authMiddleware, user_controller_1.updateUser);
