"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const category_controller_1 = require("../controllers/category.controller");
const express_1 = __importDefault(require("express"));
const category_dto_1 = require("../dtos/category.dto");
const validateDto_middleware_1 = require("../middleware/validateDto.middleware");
const auth_middleware_1 = require("../middleware/auth.middleware");
const router = express_1.default.Router();
router.post('/createCategory', auth_middleware_1.authenticateUser, (0, validateDto_middleware_1.validateDto)(category_dto_1.CreateCategoryDto), category_controller_1.createCategory);
exports.default = router;
