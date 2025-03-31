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
const serviceRoute = express_1.default.Router();
<<<<<<< HEAD
serviceRoute.post('/create', (0, validateDto_middleware_1.validateDto)(service_dto_1.ServiceDto), auth_middleware_1.authenticateUser, service_controller_1.createController);
serviceRoute.put("/update", (0, validateDto_middleware_1.validateDto)(service_dto_1.ServiceDto), auth_middleware_1.authenticateUser, service_controller_1.updateController);
serviceRoute.get("/get", auth_middleware_1.authenticateUser, service_controller_1.getAllController);
=======
serviceRoute.post("/create", (0, validateDto_middleware_1.validateDto)(service_dto_1.ServiceDto), auth_middleware_1.authenticateUser, service_controller_1.createController);
serviceRoute.put("/update", (0, validateDto_middleware_1.validateDto)(service_dto_1.ServiceDto), auth_middleware_1.authenticateUser, service_controller_1.updateController);
//todo: Get All Services
serviceRoute.get("/get", auth_middleware_1.authenticateUser, service_controller_1.getAllController);
//todo :Search a Sale By name
serviceRoute.get("/getsale/:name", auth_middleware_1.authenticateUser, service_controller_1.getService);
>>>>>>> e260e265d5e07f3cb406760e0317df0d8a3e88c8
exports.default = serviceRoute;
