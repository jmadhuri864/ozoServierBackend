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
<<<<<<< HEAD
exports.deleteController = exports.getAllController = exports.updateController = exports.createController = void 0;
=======
<<<<<<< HEAD
exports.getAllController = exports.updateController = exports.createController = void 0;
=======
exports.getService = exports.getAllController = exports.updateController = exports.createController = void 0;
>>>>>>> e260e265d5e07f3cb406760e0317df0d8a3e88c8
>>>>>>> b83403378b623a4769b06cc45b8a9b9ed2439352
const service_service_1 = require("../services/service.service");
//Todo : Controller for Post Service
const createController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.userId;
        const serviceIn = yield (0, service_service_1.createService)(req.body, userId);
        if (serviceIn) {
            return res.status(201).json({ message: "Service created successfully" });
        }
<<<<<<< HEAD
        return res.status(409).json({ Message: "Already youn provided this type of service" });
=======
        return res
            .status(409)
            .json({ Message: "Already youn provided this type of service" });
>>>>>>> e260e265d5e07f3cb406760e0317df0d8a3e88c8
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
<<<<<<< HEAD
            return res.status((result === null || result === void 0 ? void 0 : result.messge) === "Service not found" ? 404 : 405).json(result);
=======
            return res
                .status((result === null || result === void 0 ? void 0 : result.messge) === "Service not found" ? 404 : 405)
                .json(result);
>>>>>>> e260e265d5e07f3cb406760e0317df0d8a3e88c8
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
<<<<<<< HEAD
//Todo : Controller for Delete Service
const deleteController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
=======
<<<<<<< HEAD
=======
const getService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
>>>>>>> b83403378b623a4769b06cc45b8a9b9ed2439352
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
<<<<<<< HEAD
exports.deleteController = deleteController;
=======
exports.getService = getService;
>>>>>>> e260e265d5e07f3cb406760e0317df0d8a3e88c8
>>>>>>> b83403378b623a4769b06cc45b8a9b9ed2439352
