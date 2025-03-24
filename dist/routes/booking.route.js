"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingRouter = void 0;
const express_1 = __importDefault(require("express"));
const booking_controller_1 = require("../controllers/booking.controller");
const validateDto_middleware_1 = require("../middleware/validateDto.middleware");
const booking_dto_1 = require("../dtos/booking.dto");
const auth_middleware_1 = require("../middleware/auth.middleware");
exports.bookingRouter = express_1.default.Router();
exports.bookingRouter.post("/makeBooking", auth_middleware_1.authenticateUser, (0, validateDto_middleware_1.validateDto)(booking_dto_1.CreateBookingDto), booking_controller_1.makeBooking);
