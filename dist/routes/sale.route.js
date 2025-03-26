"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sale_controller_1 = require("../controllers/sale.controller");
const sale_dto_1 = require("../dtos/sale.dto");
const validateDto_middleware_1 = require("../middleware/validateDto.middleware");
const auth_middleware_1 = require("../middleware/auth.middleware");
const saleRouter = express_1.default.Router();
saleRouter.post("/createSale", auth_middleware_1.authenticateUser, (0, validateDto_middleware_1.validateDto)(sale_dto_1.CreateSaleDto), sale_controller_1.createSale);
exports.default = saleRouter;
