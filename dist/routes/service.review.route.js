"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const service_review_controller_1 = require("../controllers/service.review.controller");
const validateDto_middleware_1 = require("../middlewares/validateDto.middleware");
const service_review_dto_1 = require("../dtos/service.review.dto");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const serviceReviewRoute = express_1.default.Router();
serviceReviewRoute.post("/create/:serviceid", (0, validateDto_middleware_1.validateDto)(service_review_dto_1.ReviewDto), auth_middleware_1.authenticateUser, service_review_controller_1.insertReview);
serviceReviewRoute.get("/get/:serviceid", auth_middleware_1.authenticateUser, service_review_controller_1.reviewController);
exports.default = serviceReviewRoute;
