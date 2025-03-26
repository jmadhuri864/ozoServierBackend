"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const title_controllers_1 = require("../controllers/title.controllers");
const validateDto_middlewere_1 = require("../middlewere/validateDto.middlewere");
const title_dto_1 = require("../dto/title.dto");
const titleRoute = express_1.default.Router();
titleRoute.post("/create", (0, validateDto_middlewere_1.validateDto)(title_dto_1.TitleDto), title_controllers_1.titleController);
exports.default = titleRoute;
