import express from "express";
import { insertReview, reviewController } from "../controllers/service.review.controller";
import { validateDto } from "../middlewares/validateDto.middleware";
import { ReviewDto } from "../dtos/service.review.dto";
import { authMiddleware } from "../middlewares/auth.middleware";

const serviceReviewRoute = express.Router();

serviceReviewRoute.post("/create/:serviceid", validateDto(ReviewDto), authMiddleware, insertReview);
serviceReviewRoute.get("/get/:serviceid", authMiddleware, reviewController);

export default serviceReviewRoute;