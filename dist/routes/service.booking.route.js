"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_middleware_1 = require("../middlewares/auth.middleware");
const express_1 = __importDefault(require("express"));
const service_booking_controller_1 = require("../controllers/service.booking.controller");
const validateDto_middleware_1 = require("../middlewares/validateDto.middleware");
const service_booking_dto_1 = require("../dtos/service.booking.dto");
const serviceBookingRoute = express_1.default.Router();
serviceBookingRoute.post('/create/:serviceid', (0, validateDto_middleware_1.validateDto)(service_booking_dto_1.BookingDto), auth_middleware_1.authenticateUser, service_booking_controller_1.bookingInsert);
serviceBookingRoute.get('/get', auth_middleware_1.authenticateUser, service_booking_controller_1.getAllBooking);
exports.default = serviceBookingRoute;
