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
exports.getAll = exports.createSale = void 0;
=======
exports.getSale = exports.updateSale = exports.getAll = exports.createSale = void 0;
>>>>>>> e260e265d5e07f3cb406760e0317df0d8a3e88c8
const sale_service_1 = require("../services/sale.service");
const sale_service_2 = require("../services/sale.service");
const createSale = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const saleInfo = req.body;
        const sale = yield (0, sale_service_1.postSale)(saleInfo);
        console.log(sale);
        return res.status(sale.status).json(sale.message);
    }
    catch (error) {
        return res.status(500).json({ message: "Internal Server error" }), error;
    }
});
exports.createSale = createSale;
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allSale = yield (0, sale_service_1.getAllSale)();
    console.log(allSale);
    res
        .status(allSale.status)
        .json({ message: allSale.message, allSale: allSale.data });
});
exports.getAll = getAll;
<<<<<<< HEAD
=======
const updateSale = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.userId;
        const data = req.body;
        const updatedSale = yield (0, sale_service_2.getUpdatedSale)(id, data);
        res.status(updatedSale.status).json({ message: updatedSale.message });
    }
    catch (error) {
        res.status(500).json({ message: "Internal Server error" });
    }
});
exports.updateSale = updateSale;
const getSale = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const title = req.params.name;
        const sale = yield (0, sale_service_1.getSaleService)(title);
        res.status(sale.status).json({ message: sale.message, data: sale.data });
    }
    catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});
exports.getSale = getSale;
>>>>>>> e260e265d5e07f3cb406760e0317df0d8a3e88c8
