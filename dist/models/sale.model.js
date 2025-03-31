"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saleModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const saleSchema = new mongoose_1.default.Schema({
    u_id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    t_id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Title",
        required: true,
    },
    c_id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    itemImage: {
        type: [String],
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    condition: {
        type: String,
        enum: ["Fixed", "Negotiable"],
        default: "Fixed",
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
});
exports.saleModel = mongoose_1.default.model("Sale", saleSchema);
