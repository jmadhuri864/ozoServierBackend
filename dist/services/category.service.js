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
exports.getCatgory = void 0;
const category_model_1 = require("../models/category.model");
const title_model_1 = require("../models/title.model");
const getCatgory = (categoryInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const t_id = categoryInfo.t_id;
    const title = yield title_model_1.titleModel.findOne({ _id: t_id });
    console.log(title);
    if (!title) {
        return { status: 400, message: "title does not exist" };
    }
    else {
        const category = yield category_model_1.categoryModel.findOne({ cName: categoryInfo.cName });
        if (category) {
            return { status: 409, message: "category already exist" };
        }
        const newCategory = new category_model_1.categoryModel(Object.assign({}, categoryInfo));
        yield newCategory.save();
        return { status: 201, message: "successfully created" };
    }
});
exports.getCatgory = getCatgory;
