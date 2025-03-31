import express from "express";
import { createTitle } from "../controllers/sale.title.controller";
import { CreateTitleDto } from "../dtos/sale.title.dto";
import { validateDto } from "../middlewares/validateDto.middleware";
import { authenticateUser } from "../middlewares/auth.middleware";
const router = express();
export const saleTitleRoute = router.post(
  "/createTitle",
  validateDto(CreateTitleDto),
  authenticateUser,
  createTitle
);
