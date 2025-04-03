"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_middleware_1 = require("./../middlewares/auth.middleware");
const sale_category_controller_1 = require("../controllers/sale.category.controller");
const express_1 = __importDefault(require("express"));
const sale_category_dto_1 = require("../dtos/sale.category.dto");
const validateDto_middleware_1 = require("../middlewares/validateDto.middleware");
const saleCategoryRoute = express_1.default.Router();
<<<<<<< HEAD
saleCategoryRoute.post('/createCategory', (0, validateDto_middleware_1.validateDto)(sale_category_dto_1.CreateCategoryDto), auth_middleware_1.authMiddleware, sale_category_controller_1.createCategory);
=======
<<<<<<< HEAD
saleCategoryRoute.post('/createCategory', auth_middleware_1.authenticateUser, (0, validateDto_middleware_1.validateDto)(sale_category_dto_1.CreateCategoryDto), sale_category_controller_1.createCategory);
=======
saleCategoryRoute.post("/createCategory", auth_middleware_1.authenticateUser, (0, validateDto_middleware_1.validateDto)(sale_category_dto_1.CreateCategoryDto), sale_category_controller_1.createCategory);
>>>>>>> e260e265d5e07f3cb406760e0317df0d8a3e88c8
>>>>>>> b83403378b623a4769b06cc45b8a9b9ed2439352
exports.default = saleCategoryRoute;
