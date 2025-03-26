import express from "express";
import { categoryInsert } from "../controllers/service.category.controller";
import { validateDto } from "../middlewares/validateDto.middleware";
import { CategoryDto } from "../dtos/service.category.dto";

const serviceCategoryRoute = express.Router();

serviceCategoryRoute.post("/create",validateDto(CategoryDto), categoryInsert);

export default serviceCategoryRoute;