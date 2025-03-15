"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTitle = void 0;
const title_models_1 = require("../models/title.models");
const createTitle = async (data) => {
    try {
        const { name } = data;
        const exists = await title_models_1.Title.findOne({ name });
        if (exists) {
            return { message: "Title already exists" };
        }
        const newTitle = new title_models_1.Title({
            name
        });
        console.log(newTitle);
        const saveTitle = await newTitle.save();
        return { message: "Title Saved", saveTitle };
    }
    catch (error) {
        return { message: "Failed to create title" };
    }
};
exports.createTitle = createTitle;
