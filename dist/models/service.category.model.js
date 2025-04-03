"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const categorySchema = new mongoose_1.default.Schema({
    name: {
        type: String,
    },
<<<<<<< HEAD
    title: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Title' }
=======
    title: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Title" },
>>>>>>> e260e265d5e07f3cb406760e0317df0d8a3e88c8
});
exports.Category = mongoose_1.default.model("ServiceCategory", categorySchema);
