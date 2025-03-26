"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingInsert = void 0;
const booking_service_1 = require("../service/booking.service");
const bookingInsert = async (req, res) => {
    try {
        console.log("hiiiiiii");
        const serviceId = req.params.id;
        console.log(serviceId);
        const bookingIn = await (0, booking_service_1.createBooking)(req.body, serviceId);
        res.status(201).json(bookingIn);
    }
    catch (error) {
    }
};
exports.bookingInsert = bookingInsert;
