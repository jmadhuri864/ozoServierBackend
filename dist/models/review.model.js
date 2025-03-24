"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const reviewSchema = new mongoose_1.default.Schema({
    u_id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    b_id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Booking',
        required: true
    },
    s_id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Sale',
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    }
});
exports.reviewModel = mongoose_1.default.model('Review', reviewSchema);
