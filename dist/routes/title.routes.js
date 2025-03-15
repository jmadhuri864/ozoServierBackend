"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const title_controllers_1 = require("../controllers/title.controllers");
const titleRoute = express_1.default.Router();
titleRoute.post("/title", title_controllers_1.titleInsert);
exports.default = titleRoute;
