"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCategory = void 0;
const category_models_1 = require("../models/category.models");
//import { category } from './../interface/category.interface';
//import { title } from './../interface/title.interface';
const title_models_1 = require("./../models/title.models");
const createCategory = async (data) => {
    try {
        const { name, title } = data;
        //console.log(data);
        const titleExists = await title_models_1.Title.findOne({ name: title });
        const categoryExists = await category_models_1.Category.findOne({ name });
        if (!titleExists && categoryExists) {
            return { message: "Insert new category" };
        }
        const newCategory = new category_models_1.Category({
            name,
            title
        });
        //console.log(newCategory);
        const saveCategory = await newCategory.save();
        return { message: "Category Save Successfully", saveCategory };
    }
    catch (error) {
        return { message: "Failed to create category" };
    }
};
exports.createCategory = createCategory;
