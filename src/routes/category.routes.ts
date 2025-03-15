import express from "express";
import { categoryInsert } from "../controllers/category.controllers";

const categoryRoute = express.Router();

categoryRoute.post("", categoryInsert);

export default categoryRoute;