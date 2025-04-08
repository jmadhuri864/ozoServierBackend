import express from "express";
import { createSale, deleteController, getAll, getSale, updateSale } from "../controllers/sale.controller";
import { CreateSaleDto } from "../dtos/sale.dto";
import { validateDto } from "../middlewares/validateDto.middleware";
import { authMiddleware } from "../middlewares/auth.middleware";
import { UpdateSaleDto } from "../dtos/sale.update.dto";
import { upload } from "../config/multer.config";

const saleRouter = express.Router();
saleRouter.post("/createSale", authMiddleware,upload.array("itemImage"), validateDto(CreateSaleDto), createSale);
saleRouter.get("/getallsale", authMiddleware, getAll);
saleRouter.delete("/delete", authMiddleware, deleteController)
export default saleRouter;

//todo: Update sale
saleRouter.patch(
  "/updatesale",
  validateDto(UpdateSaleDto),
  authMiddleware,
  updateSale
);

//todo :Search a Sale By name

saleRouter.get("/getsale/:name", authMiddleware, getSale);
