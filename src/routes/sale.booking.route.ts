import mongoose from "mongoose";
import express from "express";
import {
  makeBooking,
  getAllBooking,
} from "../controllers/sale.booking.controller";
import { validateDto } from "../middlewares/validateDto.middleware";
import { CreateBookingDto } from "../dtos/sale.booking.dto";
import { authenticateUser } from "../middlewares/auth.middleware";
export const saleBookingRouter = express.Router();
saleBookingRouter.post(
  "/makeBooking",
  authenticateUser,
  validateDto(CreateBookingDto),
  makeBooking
);
saleBookingRouter.get("/getallbooking", authenticateUser, getAllBooking);
