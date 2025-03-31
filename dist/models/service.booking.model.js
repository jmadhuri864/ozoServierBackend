"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Booking = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const bookingSchema = new mongoose_1.default.Schema({
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
<<<<<<< HEAD
        ref: 'User',
        required: true
    },
    serviceId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Service',
        required: true
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
        required: true,
        default: 'Pending'
    }
});
exports.Booking = mongoose_1.default.model('ServiceBooking', bookingSchema);
=======
        ref: "User",
        required: true,
    },
    serviceId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Service",
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ["Pending", "Processing", "Delivery"],
        required: true,
        default: "Pending",
    },
});
exports.Booking = mongoose_1.default.model("ServiceBooking", bookingSchema);
>>>>>>> e260e265d5e07f3cb406760e0317df0d8a3e88c8
