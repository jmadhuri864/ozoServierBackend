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
exports.createCategory = void 0;
const service_category_model_1 = require("../models/service.category.model");
const service_title_model_1 = require("../models/service.title.model");
const createCategory = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //const name = data.name;
        const titleExists = yield service_title_model_1.Title.findOne({ name: data.title });
        const categoryExists = yield service_category_model_1.Category.findOne({ name: data.name });
        if (!titleExists && categoryExists) {
            return false;
        }
        if (!titleExists) {
            return false;
        }
        const titleId = titleExists._id;
        const newCategory = new service_category_model_1.Category({
            name: data.name,
            title: titleId
        });
        const saveCategory = yield newCategory.save();
        return true;
    }
    catch (error) {
        return { message: "Failed to create category" };
    }
});
exports.createCategory = createCategory;
