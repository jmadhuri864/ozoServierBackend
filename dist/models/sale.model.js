"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sale = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const saleSchema = new mongoose_1.default.Schema({
    s_id: {
        type: Number,
        required: true,
        unique: true
    },
    u_id: {
        type: Number,
        ref: 'User',
        required: true
    },
    t_id: {
        type: Number,
        ref: 'Title',
        required: true
    },
    c_id: {
        type: Number,
        ref: 'Category',
        required: true
    },
    description: {
        type: String,
        required: true
    },
    itemImage: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    condition: {
        type: String,
        enum: ['Fixed', 'Neotiable'],
        default: 'Fixed',
        required: true
    },
    location: {
        type: String,
        required: true
    }
});
exports.Sale = mongoose_1.default.model('Sale', saleSchema);
