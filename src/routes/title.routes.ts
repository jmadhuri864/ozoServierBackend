import { authenticateUser } from './../middlewere/auth.middlewere';
import express from "express";
import { titleController } from "../controllers/title.controllers";
import { validateDto } from "../middlewere/validateDto.middlewere";
import { TitleDto } from "../dto/title.dto";


const titleRoute = express.Router();

titleRoute.post("/create",validateDto(TitleDto),authenticateUser, titleController);

export default titleRoute;