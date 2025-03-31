import { Request, Response } from "express";
import { authenticateUser, AuthRequest } from "../middlewares/auth.middleware";
import {
  CreateReview,
  getAllReviewService,
} from "../services/sale.review.service";
export const giveReview = async (req: AuthRequest, res: Response) => {
  const u_id = req.user._id;
  const review = await CreateReview(req.body, u_id);
  res.status(review.status).json(review.message);
};
export const getAllReview = async (req: Request, res: Response) => {
  const allReview = await getAllReviewService();
  res
    .status(allReview.status)
    .json({ message: allReview.message, allreview: allReview.data });
};
