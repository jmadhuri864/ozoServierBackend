"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const booking_controllers_1 = require("../controllers/booking.controllers");
const validateDto_middlewere_1 = require("../middlewere/validateDto.middlewere");
const booking_dto_1 = require("../dto/booking.dto");
const bookingRoute = express_1.default.Router();
bookingRoute.post('/create/:id', (0, validateDto_middlewere_1.validateDto)(booking_dto_1.BookingDto), booking_controllers_1.bookingInsert);
exports.default = bookingRoute;
