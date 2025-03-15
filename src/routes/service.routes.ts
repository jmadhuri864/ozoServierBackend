import express from "express";
import { insertService } from "../controllers/service.controllers";

const serviceRoute = express.Router();

serviceRoute.post('', insertService);

export default serviceRoute;