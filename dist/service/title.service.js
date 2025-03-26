"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.titleService = void 0;
const title_models_1 = require("../models/title.models");
const titleService = async (data) => {
    try {
        const exists = await title_models_1.Title.findOne({ name: data.name });
        if (exists) {
            return false;
        }
        const newTitle = new title_models_1.Title({
            ...data,
        });
        const saveTitle = await newTitle.save();
        return true;
    }
    catch (error) {
        throw new Error("Failed to create title");
    }
};
exports.titleService = titleService;
