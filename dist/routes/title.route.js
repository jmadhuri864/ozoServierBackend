"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const express_1 = __importDefault(require("express"));
const title_controller_1 = require("../controllers/title.controller");
const title_dto_1 = require("../dtos/title.dto");
const validateDto_middleware_1 = require("../middleware/validateDto.middleware");
const auth_middleware_1 = require("../middleware/auth.middleware");
const router = (0, express_1.default)();
exports.route = router.post('/createTitle', (0, validateDto_middleware_1.validateDto)(title_dto_1.CreateTitleDto), auth_middleware_1.authenticateUser, title_controller_1.createTitle);
