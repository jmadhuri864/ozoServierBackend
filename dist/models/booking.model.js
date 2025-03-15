"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Booking = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const bookingSchema = new mongoose_1.default.Schema({
    b_id: {
        type: Number,
        required: true,
        unique: true
    },
    u_id: {
        type: Number,
        ref: 'User',
        required: true
    },
    s_id: {
        type: Number,
        ref: 'Sale',
        required: true
    },
    r_id: {
        type: Number,
        ref: 'Review',
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Confirmed', 'Completed', 'Declaim']
    }
});
exports.Booking = mongoose_1.default.model('Booking', bookingSchema);
