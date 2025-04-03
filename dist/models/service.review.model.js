"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Review = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const reviewSchema = new mongoose_1.default.Schema({
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
<<<<<<< HEAD
        required: true
    },
    serviceId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true
=======
        required: true,
    },
    serviceId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
>>>>>>> e260e265d5e07f3cb406760e0317df0d8a3e88c8
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
<<<<<<< HEAD
        required: true
    },
    description: {
        type: String
    }
});
exports.Review = mongoose_1.default.model('ServiceReview', reviewSchema);
=======
        required: true,
    },
    description: {
        type: String,
    },
});
<<<<<<< HEAD
exports.Review = mongoose_1.default.model('ServiceReview', reviewSchema);
=======
exports.Review = mongoose_1.default.model("ServiceReview", reviewSchema);
>>>>>>> e260e265d5e07f3cb406760e0317df0d8a3e88c8
>>>>>>> b83403378b623a4769b06cc45b8a9b9ed2439352
