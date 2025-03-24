import { authenticateUser } from './../middlewere/auth.middlewere';
import express from "express";
import { bookingInsert, getAllBooking } from "../controllers/booking.controllers";
import { validateDto } from "../middlewere/validateDto.middlewere";
import { BookingDto } from "../dto/booking.dto";



const bookingRoute = express.Router();

bookingRoute.post('/create/:serviceid', authenticateUser, validateDto(BookingDto), bookingInsert);
bookingRoute.get('/get', authenticateUser, getAllBooking)

export default bookingRoute;