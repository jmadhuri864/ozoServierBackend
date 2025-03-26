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
exports.createBooking = void 0;
const booking_model_1 = require("../models/booking.model");
const createBooking = (validBookingInfo, u_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const booking = new booking_model_1.bookingModel({
            u_id: u_id,
            s_id: validBookingInfo.s_id,
            bookingDataTime: Date.now,
            status: validBookingInfo.status
        });
        yield booking.save();
        return { status: 201, message: "successfully created" };
    }
    catch (error) {
        return { status: 500, message: "Internal server error" };
    }
});
exports.createBooking = createBooking;
