"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Booking = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const bookingSchema = new mongoose_1.default.Schema({
    User: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User'
    },
    service: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Service'
    },
    time: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Processing', 'Delivery'],
        required: true
    }
});
exports.Booking = mongoose_1.default.model('Booking', bookingSchema);
