"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const express_1 = __importDefault(require("express"));
const title_controller_1 = require("../controllers/title.controller");
const router = (0, express_1.default)();
exports.route = router.post('/createTitle', title_controller_1.createTitle);
