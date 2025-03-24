"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const category_controllers_1 = require("../controllers/category.controllers");
const validateDto_middlewere_1 = require("../middlewere/validateDto.middlewere");
const category_dto_1 = require("../dto/category.dto");
const categoryRoute = express_1.default.Router();
categoryRoute.post("/create", (0, validateDto_middlewere_1.validateDto)(category_dto_1.CategoryDto), category_controllers_1.categoryInsert);
exports.default = categoryRoute;
