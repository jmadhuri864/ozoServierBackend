"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const serviceSchema = new mongoose_1.default.Schema({
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    titleId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Title',
        required: true
    },
    categoryId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    setPrice: {
        type: Number,
        required: true
    },
    pricePer: {
        type: String,
        enum: ['Per Hour', 'Per Day', 'Fix Rate'],
        default: 'Per Hour'
    },
    availability: {
        type: String,
        enum: ['Morning : 9 To 12', 'Afternoon : 2 To 4', 'Evening : 4 To 6'],
        default: 'Morning : 9 To 12'
    },
    itemPhoto: {
        type: [String],
        required: true
    },
    address: {
        type: String,
        required: true
    }
});
exports.Service = mongoose_1.default.model("Service", serviceSchema);
