"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBooking = void 0;
const booking_models_1 = require("../models/booking.models");
const createBooking = async (data, serviceId) => {
    try {
        console.log("hiiiiiiiii");
        const { userId, time, date } = data;
        console.log("hiiiiiiiiii");
        const newBooking = new booking_models_1.Booking({
            serviceId,
            userId,
            time,
            date
        });
        console.log(newBooking);
        const saveBooking = await newBooking.save();
        return { message: saveBooking };
    }
    catch (error) {
        return { message: "Something went wrong" };
    }
};
exports.createBooking = createBooking;
