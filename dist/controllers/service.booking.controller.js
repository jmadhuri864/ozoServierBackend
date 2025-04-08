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
exports.getAllBooking = exports.bookingInsert = void 0;
const service_booking_service_1 = require("../services/service.booking.service");
//Todo : Controller for Post Booking
const bookingInsert = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userID = req.user.userId;
        const bookingIn = yield (0, service_booking_service_1.createBooking)(req.body, req.params, userID);
        return res.status(201).json(bookingIn);
    }
    catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
});
exports.bookingInsert = bookingInsert;
//Todo : Controller for GetAll Bookings
const getAllBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user;
        // const userId = authReq.user.id;
        if (!userId) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const result = yield (0, service_booking_service_1.getAllBookingService)(userId);
        if (!result) {
            return res.status(404).json({ Message: "Not yet service booking" });
        }
        return res.status(200).json(result);
    }
    catch (error) { }
});
exports.getAllBooking = getAllBooking;
