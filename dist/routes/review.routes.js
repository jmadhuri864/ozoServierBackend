"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const review_controllers_1 = require("../controllers/review.controllers");
const validateDto_middlewere_1 = require("../middlewere/validateDto.middlewere");
const review_dto_1 = require("../dto/review.dto");
const reviewRoute = express_1.default.Router();
reviewRoute.post("/create", (0, validateDto_middlewere_1.validateDto)(review_dto_1.ReviewDto), review_controllers_1.insertReview);
exports.default = reviewRoute;
