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
exports.createTitle = void 0;
const sale_title_service_1 = require("../services/sale.title.service");
const createTitle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const titleInfo = req.body;
    const title = yield (0, sale_title_service_1.postTitle)(titleInfo);
    if (title) {
        res.status(201).json({ message: "created" });
    }
    else {
<<<<<<< HEAD
        res
            .status(409)
            .json({ message: `title already exist` });
=======
        res.status(409).json({ message: `title already exist` });
>>>>>>> e260e265d5e07f3cb406760e0317df0d8a3e88c8
    }
});
exports.createTitle = createTitle;
