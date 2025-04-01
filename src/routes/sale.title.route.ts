import { authMiddleware } from './../middlewares/auth.middleware';
import express from "express";
import { createTitle } from "../controllers/sale.title.controller";
import { CreateTitleDto } from "../dtos/sale.title.dto";
import { validateDto } from "../middlewares/validateDto.middleware";

const router = express();
export const saleTitleRoute = router.post(
  "/createTitle",
  validateDto(CreateTitleDto),
  authMiddleware,
  createTitle
);
