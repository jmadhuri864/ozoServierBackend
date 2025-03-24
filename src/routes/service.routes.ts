import express from "express";
import { createController, getAllController, updateController } from "../controllers/service.controllers";
import { validateDto } from "../middlewere/validateDto.middlewere";
import { ServiceDto } from "../dto/service.dto";
import { authenticateUser } from "../middlewere/auth.middlewere";

const serviceRoute = express.Router();

serviceRoute.post('/create', authenticateUser, validateDto(ServiceDto), createController);
serviceRoute.put("/update",authenticateUser, validateDto(ServiceDto), updateController);
serviceRoute.get("/get", authenticateUser, getAllController);

export default serviceRoute;