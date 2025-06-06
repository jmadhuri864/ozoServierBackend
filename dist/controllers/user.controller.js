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
exports.updateUser = void 0;
const user_service_1 = require("../services/user.service");
//todo:Update User
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.user.userId;
        console.log(id);
        const updatedData = req.body;
        const updatedUser = yield (0, user_service_1.updateUserService)(id, updatedData);
        res.status(updatedUser.status).json({ message: updatedUser.message });
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.updateUser = updateUser;
