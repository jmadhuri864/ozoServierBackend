import express from "express";
import { validateDto } from "../middlewares/validateDto.middleware";
import { authMiddleware } from "../middlewares/auth.middleware";
import { giveReview, getAllReview } from "../controllers/sale.review.controller";
import { CreateReviewDto } from "../dtos/sale.review.dto";
export const saleReviewRouter = express.Router();
saleReviewRouter.post( "/giveReview", validateDto(CreateReviewDto), authMiddleware, giveReview);
saleReviewRouter.get("/getallreview", authMiddleware, getAllReview);
