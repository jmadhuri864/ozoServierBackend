import mongoose from "mongoose"
import express from 'express'
import { makeBooking } from "../controllers/booking.controller";
import { validateDto } from "../middleware/validateDto.middleware";
import { CreateBookingDto } from "../dtos/booking.dto";
import { authenticateUser } from "../middleware/auth.middleware";
export const bookingRouter=express.Router();
bookingRouter.post("/makeBooking",authenticateUser,validateDto(CreateBookingDto),makeBooking)
