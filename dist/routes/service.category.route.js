"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const service_category_controller_1 = require("../controllers/service.category.controller");
const validateDto_middleware_1 = require("../middlewares/validateDto.middleware");
const service_category_dto_1 = require("../dtos/service.category.dto");
const serviceCategoryRoute = express_1.default.Router();
serviceCategoryRoute.post("/create", (0, validateDto_middleware_1.validateDto)(service_category_dto_1.CategoryDto), service_category_controller_1.categoryInsert);
exports.default = serviceCategoryRoute;
