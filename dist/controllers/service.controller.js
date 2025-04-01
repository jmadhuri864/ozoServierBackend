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
exports.deleteController = exports.getAllController = exports.updateController = exports.createController = void 0;
const service_service_1 = require("../services/service.service");
//Todo : Controller for Post Service
const createController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.userId;
        const serviceIn = yield (0, service_service_1.createService)(req.body, userId);
        if (serviceIn) {
            return res.status(201).json({ message: "Service created successfully" });
        }
        return res
            .status(409)
            .json({ Message: "Already youn provided this type of service" });
    }
    catch (error) {
        return res.status(500).json({ message: "Something Wrong" });
    }
});
exports.createController = createController;
//Todo : Controller for Update Service
const updateController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, service_service_1.updateService)(req.body, req.params);
        if (!(result === null || result === void 0 ? void 0 : result.success)) {
            return res
                .status((result === null || result === void 0 ? void 0 : result.messge) === "Service not found" ? 404 : 405)
                .json(result);
        }
    }
    catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
});
exports.updateController = updateController;
//Todo : Controller for GetAll Servics
const getAllController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, service_service_1.getAllService)();
        if (!result.success) {
            return res.status(500).json(result);
        }
    }
    catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
});
exports.getAllController = getAllController;
//Todo : Controller for Delete Service
const deleteController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, service_service_1.deleteService)(req.params.id);
        if (!result) {
            return res.status(201).json({ message: "Service not found" });
        }
        return res.status(200).json({ message: "Service deleted successfully" });
    }
    catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
});
exports.deleteController = deleteController;
