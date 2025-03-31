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
exports.getSaleService = exports.getUpdatedSale = exports.getAllSale = exports.postSale = void 0;
const sale_category_model_1 = require("../models/sale.category.model");
const sale_model_1 = require("./../models/sale.model");
const sale_title_model_1 = require("../models/sale.title.model");
const postSale = (saleInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const saleExistWithUser = yield sale_model_1.saleModel.find({ u_id: saleInfo.u_id });
    const filterByCategory = saleExistWithUser.filter((ele) => String(ele.c_id) === saleInfo.c_id);
    if (filterByCategory.length > 0) {
        return { status: 409, message: "category already exist for this user" };
    }
    const existCategory = yield sale_category_model_1.categoryModel.findOne({ _id: saleInfo.c_id });
    if (existCategory) {
        const categoryId = existCategory._id;
        const titleId = existCategory.t_id;
        const newSale = new sale_model_1.saleModel({
            u_id: saleInfo.u_id,
            c_id: categoryId,
            t_id: titleId,
            description: saleInfo.description,
            itemImage: saleInfo.itemImage,
            price: saleInfo.price,
            condition: saleInfo.condition,
            location: saleInfo.location,
        });
        yield newSale.save();
        return { status: 201, message: "successfully created" };
    }
});
exports.postSale = postSale;
const getAllSale = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allSale = yield sale_model_1.saleModel.find();
        if (!allSale) {
            return { status: 404, message: "no sale found" };
        }
        return { status: 200, message: "success", data: allSale };
    }
    catch (error) {
        return { status: 500, message: "Internal server error" };
    }
});
exports.getAllSale = getAllSale;
const getUpdatedSale = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedSale = yield sale_model_1.saleModel.findByIdAndUpdate(id, data);
        if (!updatedSale) {
            return { status: 404, message: "sale not found" };
        }
        console.log(updatedSale);
        return { status: 200, message: "updated successfully" };
    }
    catch (error) {
        return { status: 5000, message: "Internal server error" };
    }
});
exports.getUpdatedSale = getUpdatedSale;
const getSaleService = (title) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getTitle = yield sale_title_model_1.titleModel.findOne({
            tName: { $regex: title.trim(), $options: "i" },
        });
        console.log(getTitle);
        if (!getTitle) {
            return { status: 404, message: "sale not exist" };
        }
        const titleId = getTitle === null || getTitle === void 0 ? void 0 : getTitle._id;
        const getSales = yield sale_model_1.saleModel.find({ t_id: titleId });
        if (getSales.length == 0) {
            return { status: 404, message: "sale not exist" };
        }
        return { status: 200, message: "success", data: getSales };
    }
    catch (error) {
        return { status: 500, message: "Internal Server Error" };
    }
});
exports.getSaleService = getSaleService;
