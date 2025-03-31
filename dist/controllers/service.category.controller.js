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
exports.categoryInsert = void 0;
const service_category_service_1 = require("../services/service.category.service");
const categoryInsert = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categoryIn = yield (0, service_category_service_1.createCategory)(req.body);
        if (categoryIn) {
            return res.status(201).json({ message: "Category insert successfullly" });
        }
        return res.status(409).json({ message: "Title or category name already exit" });
    }
    catch (error) {
        res.status(500).json({ message: "something Wrong" });
    }
});
exports.categoryInsert = categoryInsert;
