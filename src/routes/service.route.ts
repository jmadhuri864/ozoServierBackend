import express from "express";
import {
  createController,
  getAllController,
  updateController,
  getService
} from "../controllers/service.controller";
import { validateDto } from "../middlewares/validateDto.middleware";
import { ServiceDto } from "../dtos/service.dto";
import { authenticateUser } from "../middlewares/auth.middleware";

const serviceRoute = express.Router();

serviceRoute.post(
  "/create",
  validateDto(ServiceDto),
  authenticateUser,
  createController
);
serviceRoute.put(
  "/update",
  validateDto(ServiceDto),
  authenticateUser,
  updateController
);

//todo: Get All Services
serviceRoute.get("/get", authenticateUser, getAllController);

//todo :Search a Sale By name

serviceRoute.get("/getsale/:name", authenticateUser, getService);

export default serviceRoute;
