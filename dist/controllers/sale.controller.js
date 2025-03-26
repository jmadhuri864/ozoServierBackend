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
exports.createSale = void 0;
const sale_service_1 = require("../services/sale.service");
const createSale = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const saleInfo = req.body;
        const sale = yield (0, sale_service_1.getSale)(saleInfo);
        console.log(sale);
        return res.status(sale.status).json(sale.message);
    }
    catch (error) {
        return res.status(500).json({ message: 'Internal Server error' }), error;
    }
});
exports.createSale = createSale;
