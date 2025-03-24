"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.titleController = void 0;
const title_service_1 = require("../service/title.service");
const titleController = async (req, res) => {
    try {
        const titleData = req.body;
        if (!titleData.name) {
            return res.status(400).json({ error: "Missing required field" });
        }
        const titleIn = await (0, title_service_1.titleService)(req.body);
        if (titleIn) {
            return res.status(201).json({ message: "Title insert successfully" });
        }
        return res.status(409).json({ message: "Title name already exit" });
    }
    catch (error) {
        res.status(500).json({ message: "Something Wrong" });
    }
};
exports.titleController = titleController;
