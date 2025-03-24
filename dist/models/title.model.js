"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.titleModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const titleSchema = new mongoose_1.default.Schema({
    tName: {
        type: String,
        unique: true,
        required: true,
    },
});
exports.titleModel = mongoose_1.default.model("Title", titleSchema);
