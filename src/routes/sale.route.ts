import express from "express";
import { createSale, deleteController, getAll } from "../controllers/sale.controller";
import { CreateSaleDto } from "../dtos/sale.dto";
import { validateDto } from "../middlewares/validateDto.middleware";
import { authMiddleware } from "../middlewares/auth.middleware";

const saleRouter = express.Router();
saleRouter.post("/createSale", authMiddleware, validateDto(CreateSaleDto), createSale);
saleRouter.get("/getallsale", authMiddleware, getAll);
saleRouter.delete("/delete", authMiddleware, deleteController)
export default saleRouter;
