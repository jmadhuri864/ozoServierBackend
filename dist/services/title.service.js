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
exports.postTitle = void 0;
const title_model_1 = require("../models/title.model");
const postTitle = (titleInfo) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(titleInfo);
    const tName = titleInfo.tName;
    console.log(tName);
    const title = yield title_model_1.titleModel.findOne({ tName });
    console.log(title);
    if (title) {
        return false;
    }
    const newTitle = new title_model_1.titleModel(Object.assign({}, titleInfo));
    console.log(newTitle);
    yield newTitle.save();
    return true;
});
exports.postTitle = postTitle;
