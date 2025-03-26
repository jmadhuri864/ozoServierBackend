import express from "express";
import { createSale, getAll } from "../controllers/sale.controller";
import { CreateSaleDto } from "../dtos/sale.dto";
import { validateDto } from "../middlewares/validateDto.middleware";
import { authenticateUser } from "../middlewares/auth.middleware";

const saleRouter = express.Router();
saleRouter.post(
  "/createSale",
  authenticateUser,
  validateDto(CreateSaleDto),
  createSale
);
saleRouter.get("/getallsale", authenticateUser, getAll);
export default saleRouter;
