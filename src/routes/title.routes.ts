import express from "express";
import { titleInsert } from "../controllers/title.controllers";

const titleRoute = express.Router();

titleRoute.post("/title", titleInsert);

export default titleRoute;