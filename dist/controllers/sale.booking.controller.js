"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllBooking = exports.makeBooking = void 0;
const sale_booking_service_1 = require("../services/sale.booking.service");
const makeBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const u_id = req.user._id;
    console.log(u_id);
    console.log(req.body);
    const booking = yield (0, sale_booking_service_1.createBooking)(req.body, u_id);
    res.status(booking.status).json(booking.message);
});
exports.makeBooking = makeBooking;
const getAllBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allBooking = yield (0, sale_booking_service_1.getAllBookingService)();
    res
        .status(allBooking.status)
        .json({ message: allBooking.message, data: allBooking.data });
});
exports.getAllBooking = getAllBooking;
