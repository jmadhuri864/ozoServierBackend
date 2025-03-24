"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const service_controllers_1 = require("../controllers/service.controllers");
const validateDto_middlewere_1 = require("../middlewere/validateDto.middlewere");
const service_dto_1 = require("../dto/service.dto");
const serviceRoute = express_1.default.Router();
serviceRoute.post('/create', (0, validateDto_middlewere_1.validateDto)(service_dto_1.ServiceDto), service_controllers_1.insertService);
exports.default = serviceRoute;
