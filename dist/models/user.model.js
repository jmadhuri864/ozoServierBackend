"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    profilePhoto: {
        type: String,
<<<<<<< HEAD
        required: true
=======
<<<<<<< HEAD
        required: true
=======
        required: true,
>>>>>>> e260e265d5e07f3cb406760e0317df0d8a3e88c8
>>>>>>> b83403378b623a4769b06cc45b8a9b9ed2439352
    },
    lastName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    phoneNumber: {
<<<<<<< HEAD
        type: String,
        required: true
    },
    emailAddress: {
        type: String,
        required: true
=======
        type: String,
        required: true
    },
    emailAddress: {
        type: String,
<<<<<<< HEAD
        required: true
=======
        required: true,
>>>>>>> e260e265d5e07f3cb406760e0317df0d8a3e88c8
>>>>>>> b83403378b623a4769b06cc45b8a9b9ed2439352
    },
    password: {
        type: String,
        required: true
    },
    termsCondition: {
        type: Boolean,
<<<<<<< HEAD
        required: true
    },
    otp: {
        type: String,
        default: null
    },
    otpExpires: {
        type: Date,
        default: null
    }
=======
<<<<<<< HEAD
        required: true
    }
=======
        required: true,
    },
>>>>>>> e260e265d5e07f3cb406760e0317df0d8a3e88c8
>>>>>>> b83403378b623a4769b06cc45b8a9b9ed2439352
});
exports.User = mongoose_1.default.model("User", userSchema);
