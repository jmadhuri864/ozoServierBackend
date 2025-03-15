"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const categorySchema = new mongoose_1.default.Schema({
    c_id: {
        type: Number,
        required: true,
        unique: true,
    },
    cName: {
        type: String,
        required: true,
    },
    t_id: {
        type: Number,
        ref: "Title",
        required: true,
    },
});
exports.Category = mongoose_1.default.model("Category", categorySchema);
