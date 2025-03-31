"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const bookingSchema = new mongoose_1.default.Schema({
    u_id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    s_id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Sale",
        required: true,
    },
    bookingDataTime: {
        type: Date,
        required: true,
    },
    status: {
        type: [String],
<<<<<<< HEAD
        enum: ["Confirmed", "Completed", "Declaim"],
    }
=======
        enum: ["Confirmed", "Completed", "Declained"],
    },
>>>>>>> e260e265d5e07f3cb406760e0317df0d8a3e88c8
});
exports.bookingModel = mongoose_1.default.model("SaleBooking", bookingSchema);
