import express from "express";
import { insertReview } from "../controllers/review.controllers";
import { validateDto } from "../middlewere/validateDto.middlewere";
import { ReviewDto } from "../dto/review.dto";
import { authenticateUser } from "../middlewere/auth.middlewere";

const reviewRoute = express.Router();

reviewRoute.post("/create/:userid/:serviceid", authenticateUser, validateDto(ReviewDto), insertReview);

export default reviewRoute;