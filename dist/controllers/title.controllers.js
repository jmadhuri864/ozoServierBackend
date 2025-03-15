"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.titleInsert = void 0;
const title_service_1 = require("../service/title.service");
const titleInsert = async (req, res) => {
    try {
        const titleIn = await (0, title_service_1.createTitle)(req.body);
        res.status(201).json({ titleIn });
    }
    catch (error) {
        res.status(500).json({ message: "Something Wrong" });
    }
};
exports.titleInsert = titleInsert;
