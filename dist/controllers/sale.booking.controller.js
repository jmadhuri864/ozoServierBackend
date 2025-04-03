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
<<<<<<< HEAD
//Todo : Post Bookig Controller
=======
<<<<<<< HEAD
//Todo : Post Bookig Controller
=======
>>>>>>> e260e265d5e07f3cb406760e0317df0d8a3e88c8
>>>>>>> b83403378b623a4769b06cc45b8a9b9ed2439352
const makeBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const u_id = req.user._id;
    console.log(u_id);
    console.log(req.body);
    const booking = yield (0, sale_booking_service_1.createBooking)(req.body, u_id);
    res.status(booking.status).json(booking.message);
});
exports.makeBooking = makeBooking;
<<<<<<< HEAD
//Todo : Get All Booking controller
const getAllBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allBooking = yield (0, sale_booking_service_1.getAllBookingService)();
    res.status(allBooking.status).json({ message: allBooking.message, data: allBooking.data });
=======
<<<<<<< HEAD
//Todo : Get All Booking controller
const getAllBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allBooking = yield (0, sale_booking_service_1.getAllBookingService)();
    res.status(allBooking.status).json({ message: allBooking.message, data: allBooking.data });
=======
const getAllBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allBooking = yield (0, sale_booking_service_1.getAllBookingService)();
    res
        .status(allBooking.status)
        .json({ message: allBooking.message, data: allBooking.data });
>>>>>>> e260e265d5e07f3cb406760e0317df0d8a3e88c8
>>>>>>> b83403378b623a4769b06cc45b8a9b9ed2439352
});
exports.getAllBooking = getAllBooking;
