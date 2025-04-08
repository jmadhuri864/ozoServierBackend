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
exports.getAllBookingService = exports.createBooking = void 0;
const service_booking_model_1 = require("../models/service.booking.model");
//Todo : Create Booking
const createBooking = (data, paramsData, userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { serviceid } = paramsData;
        const newBooking = new service_booking_model_1.Booking({
            userId: userId,
            serviceId: serviceid,
            time: data.time,
            date: data.date,
            status: data.status,
        });
        const saveBooking = yield newBooking.save();
        return { message: "Booking successfully" };
    }
    catch (error) {
        return { message: "Something went wrong" };
    }
});
exports.createBooking = createBooking;
//Todo : Get Booking Details
const getAllBookingService = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookings = yield service_booking_model_1.Booking.find({ userId: userId.userId })
            .populate({
            path: "serviceId",
            select: "setPrice pricePer itemPhoto -_id",
            populate: [
                { path: "titleId", select: "name -_id" },
                { path: "categoryId", select: "name -_id" },
            ],
        })
            .populate("userId", "firstName lastName -_id")
            .select("-_id -__v");
        if (!bookings) {
            return false;
        }
        return bookings;
    }
    catch (error) {
        return { message: "Something went wrong" };
    }
});
exports.getAllBookingService = getAllBookingService;
