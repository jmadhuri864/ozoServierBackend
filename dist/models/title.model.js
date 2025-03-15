"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const titleSchema = new mongoose_1.default.Schema({
    t_id: {
        type: Number,
        required: true,
        unique: true,
    },
    tName: {
        type: String,
        required: true,
    }
});
exports.Title = mongoose_1.default.model("Title", titleSchema);
