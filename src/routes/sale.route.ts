import express from "express";
import {
  createSale,
  getAll,
  updateSale,
  getSale,
} from "../controllers/sale.controller";
import { CreateSaleDto } from "../dtos/sale.dto";
import { validateDto } from "../middlewares/validateDto.middleware";
import { authenticateUser } from "../middlewares/auth.middleware";
import { UpdateSaleDto } from "../dtos/sale.update.dto";
const saleRouter = express.Router();

//todo :Create a Sale for product
saleRouter.post(
  "/createSale",
  validateDto(CreateSaleDto),
  authenticateUser,
  createSale
);

//todo :Get All Sales
saleRouter.get("/getallsale", authenticateUser, getAll);
export default saleRouter;

//todo: Update sale
saleRouter.patch(
  "/updatesale",
  validateDto(UpdateSaleDto),
  authenticateUser,
  updateSale
);

//todo :Search a Sale By name

saleRouter.get("/getsale/:name", authenticateUser, getSale);
