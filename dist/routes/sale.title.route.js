"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saleTitleRoute = void 0;
const auth_middleware_1 = require("./../middlewares/auth.middleware");
const express_1 = __importDefault(require("express"));
const sale_title_controller_1 = require("../controllers/sale.title.controller");
const sale_title_dto_1 = require("../dtos/sale.title.dto");
const validateDto_middleware_1 = require("../middlewares/validateDto.middleware");
const router = (0, express_1.default)();
exports.saleTitleRoute = router.post("/createTitle", (0, validateDto_middleware_1.validateDto)(sale_title_dto_1.CreateTitleDto), auth_middleware_1.authMiddleware, sale_title_controller_1.createTitle);
