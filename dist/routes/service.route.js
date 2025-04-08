"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const service_controller_1 = require("../controllers/service.controller");
const validateDto_middleware_1 = require("../middlewares/validateDto.middleware");
const service_dto_1 = require("../dtos/service.dto");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const multer_config_1 = require("../config/multer.config");
const serviceRoute = express_1.default.Router();
serviceRoute.post('/create', multer_config_1.upload.array("itemPhoto", 3), (0, validateDto_middleware_1.validateDto)(service_dto_1.ServiceDto), auth_middleware_1.authMiddleware, service_controller_1.createController);
serviceRoute.put("/update", (0, validateDto_middleware_1.validateDto)(service_dto_1.ServiceDto), auth_middleware_1.authMiddleware, service_controller_1.updateController);
serviceRoute.get("/get?", auth_middleware_1.authMiddleware, service_controller_1.getAllController);
exports.default = serviceRoute;
