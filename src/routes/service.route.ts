import express from "express";
import {
  createController,
  getAllController,
  updateController
} from "../controllers/service.controller";
import { validateDto } from "../middlewares/validateDto.middleware";
import { ServiceDto } from "../dtos/service.dto";
import { authMiddleware } from "../middlewares/auth.middleware";
import { upload } from "../config/multer.config";

const serviceRoute = express.Router();

serviceRoute.post('/create',upload.array("itemPhoto", 3), validateDto(ServiceDto), authMiddleware, createController);
serviceRoute.put("/update", validateDto(ServiceDto), authMiddleware, updateController);
serviceRoute.get("/get?", authMiddleware, getAllController);

export default serviceRoute;
