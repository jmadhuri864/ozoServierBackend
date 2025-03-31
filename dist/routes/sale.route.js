"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sale_controller_1 = require("../controllers/sale.controller");
const sale_dto_1 = require("../dtos/sale.dto");
const validateDto_middleware_1 = require("../middlewares/validateDto.middleware");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const sale_update_dto_1 = require("../dtos/sale.update.dto");
const saleRouter = express_1.default.Router();
//todo :Create a Sale for product
saleRouter.post("/createSale", (0, validateDto_middleware_1.validateDto)(sale_dto_1.CreateSaleDto), auth_middleware_1.authenticateUser, sale_controller_1.createSale);
//todo :Get All Sales
saleRouter.get("/getallsale", auth_middleware_1.authenticateUser, sale_controller_1.getAll);
exports.default = saleRouter;
//todo: Update sale
saleRouter.patch("/updatesale", (0, validateDto_middleware_1.validateDto)(sale_update_dto_1.UpdateSaleDto), auth_middleware_1.authenticateUser, sale_controller_1.updateSale);
//todo :Search a Sale By name
saleRouter.get("/getsale/:name", auth_middleware_1.authenticateUser, sale_controller_1.getSale);
