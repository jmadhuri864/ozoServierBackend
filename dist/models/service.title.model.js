"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const titleSchema = new mongoose_1.default.Schema({
<<<<<<< HEAD
    name: { type: String, required: true }
}, { timestamps: true });
exports.Title = mongoose_1.default.model('ServiceTitle', titleSchema);
=======
    name: { type: String, required: true },
}, { timestamps: true });
exports.Title = mongoose_1.default.model("ServiceTitle", titleSchema);
>>>>>>> e260e265d5e07f3cb406760e0317df0d8a3e88c8
