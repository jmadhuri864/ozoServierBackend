"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saleBookingRouter = void 0;
const express_1 = __importDefault(require("express"));
const sale_booking_controller_1 = require("../controllers/sale.booking.controller");
const validateDto_middleware_1 = require("../middlewares/validateDto.middleware");
const sale_booking_dto_1 = require("../dtos/sale.booking.dto");
const auth_middleware_1 = require("../middlewares/auth.middleware");
exports.saleBookingRouter = express_1.default.Router();
exports.saleBookingRouter.post("/makeBooking", auth_middleware_1.authMiddleware, (0, validateDto_middleware_1.validateDto)(sale_booking_dto_1.CreateBookingDto), sale_booking_controller_1.makeBooking);
exports.saleBookingRouter.get("/getallbooking", auth_middleware_1.authMiddleware, sale_booking_controller_1.getAllBooking);
