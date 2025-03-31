"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const service_title_controller_1 = require("../controllers/service.title.controller");
const validateDto_middleware_1 = require("../middlewares/validateDto.middleware");
const service_title_dto_1 = require("../dtos/service.title.dto");
const serviceTitleRoute = express_1.default.Router();
serviceTitleRoute.post("/create", (0, validateDto_middleware_1.validateDto)(service_title_dto_1.TitleDto), service_title_controller_1.titleController);
exports.default = serviceTitleRoute;
