import { authenticateUser } from '../middlewares/auth.middleware';
import express from "express";
import { bookingInsert, getAllBooking } from "../controllers/service.booking.controller";
import { validateDto } from "../middlewares/validateDto.middleware";
import { BookingDto } from "../dtos/service.booking.dto";



const serviceBookingRoute = express.Router();

serviceBookingRoute.post('/create/:serviceid', validateDto(BookingDto), authenticateUser, bookingInsert);
serviceBookingRoute.get('/get', authenticateUser, getAllBooking)

export default serviceBookingRoute;