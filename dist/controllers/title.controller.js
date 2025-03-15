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
const title_service_1 = require("../services/title.service");
const createTitle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { t_id, tName } = req.body;
    const title = yield (0, title_service_1.postTitle)(t_id, tName);
    if (title) {
        res.status(201).json({ message: 'created' });
    }
    else {
        res.status(409).json({ message: `title with ${t_id} already exist` });
    }
});
exports.createTitle = createTitle;
