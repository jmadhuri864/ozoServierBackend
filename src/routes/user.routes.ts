import express from "express";
import { login, signUp } from "../controllers/user.controllers";

const route = express.Router();

route.post("/signup", signUp);
route.post("/login", login);
export default route;