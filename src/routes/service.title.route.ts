import express from "express";
import { titleController } from "../controllers/service.title.controller";
import { validateDto } from "../middlewares/validateDto.middleware";
import { TitleDto } from "../dtos/service.title.dto";


const serviceTitleRoute = express.Router();

serviceTitleRoute.post("/create",validateDto(TitleDto), titleController);

export default serviceTitleRoute;