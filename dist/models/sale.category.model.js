"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const categorySchema = new mongoose_1.default.Schema({
    cName: {
        type: String,
        required: true,
    },
    t_id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Title",
        required: true,
<<<<<<< HEAD
    }
=======
    },
>>>>>>> e260e265d5e07f3cb406760e0317df0d8a3e88c8
});
exports.categoryModel = mongoose_1.default.model("SaleCategory", categorySchema);
