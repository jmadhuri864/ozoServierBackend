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
const sale_category_model_1 = require("../models/sale.category.model");
const sale_title_model_1 = require("../models/sale.title.model");
const getCatgory = (categoryInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const t_id = categoryInfo.t_id;
    const title = yield sale_title_model_1.titleModel.findOne({ _id: t_id });
    console.log(title);
    if (!title) {
        return { status: 400, message: "title does not exist" };
    }
    else {
        const category = yield sale_category_model_1.categoryModel.findOne({ cName: categoryInfo.cName });
        if (category) {
            return { status: 409, message: "category already exist" };
        }
        const newCategory = new sale_category_model_1.categoryModel(Object.assign({}, categoryInfo));
        yield newCategory.save();
        return { status: 201, message: "successfully created" };
    }
});
exports.getCatgory = getCatgory;
