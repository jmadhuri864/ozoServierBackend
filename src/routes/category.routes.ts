import express from "express";
import { categoryInsert } from "../controllers/category.controllers";
import { validateDto } from "../middlewere/validateDto.middlewere";
import { CategoryDto } from "../dto/category.dto";

const categoryRoute = express.Router();

categoryRoute.post("/create",validateDto(CategoryDto), categoryInsert);

export default categoryRoute;