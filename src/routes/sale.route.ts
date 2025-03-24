
import express from "express";
import { createSale } from "../controllers/sale.controller";
import { CreateSaleDto } from "../dtos/sale.dto";
import { validateDto } from "../middleware/validateDto.middleware";
import { authenticateUser } from "../middleware/auth.middleware";

const saleRouter = express.Router();
saleRouter.post("/createSale",authenticateUser,validateDto(CreateSaleDto),createSale);
export default saleRouter;
