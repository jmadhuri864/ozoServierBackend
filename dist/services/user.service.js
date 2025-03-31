"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserService = void 0;
const user_model_1 = require("../models/user.model");
const updateUserService = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (data.password) {
            return {
                status: 400,
                message: "you can not update password fro here you have to reset it",
            };
        }
        const updatedUser = yield user_model_1.User.findByIdAndUpdate(id, data, { new: true });
        console.log("hiiiiiiiiiiiiiii");
        console.log(updatedUser);
        return { status: 200, message: "updated successfully" };
    }
    catch (error) {
        return { status: 500, message: "Internal server error" };
    }
});
exports.updateUserService = updateUserService;
