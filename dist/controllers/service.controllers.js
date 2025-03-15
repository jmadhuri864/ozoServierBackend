"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertService = void 0;
const service_service_1 = require("../service/service.service");
const insertService = async (req, res) => {
    try {
        const serviceIn = await (0, service_service_1.createService)(req.body);
        res.status(201).json(serviceIn);
    }
    catch (error) {
        res.status(500).json({ message: "Something Wrong" });
    }
};
exports.insertService = insertService;
