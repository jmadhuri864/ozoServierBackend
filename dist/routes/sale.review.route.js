"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saleReviewRouter = void 0;
const express_1 = __importDefault(require("express"));
const validateDto_middleware_1 = require("../middlewares/validateDto.middleware");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const sale_review_controller_1 = require("../controllers/sale.review.controller");
const sale_review_dto_1 = require("../dtos/sale.review.dto");
exports.saleReviewRouter = express_1.default.Router();
exports.saleReviewRouter.post("/giveReview", (0, validateDto_middleware_1.validateDto)(sale_review_dto_1.CreateReviewDto), auth_middleware_1.authenticateUser, sale_review_controller_1.giveReview);
exports.saleReviewRouter.get("/getallreview", auth_middleware_1.authenticateUser, sale_review_controller_1.getAllReview);
