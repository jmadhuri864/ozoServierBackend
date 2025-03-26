"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryInsert = void 0;
const category_service_1 = require("../service/category.service");
const categoryInsert = async (req, res) => {
    try {
        const categoryIn = await (0, category_service_1.createCategory)(req.body);
        res.status(201).json({ categoryIn });
    }
    catch (error) {
        res.status(500).json({ message: "something Wrong" });
    }
};
exports.categoryInsert = categoryInsert;
