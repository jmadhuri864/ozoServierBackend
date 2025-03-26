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
exports.getSale = void 0;
const category_model_1 = require("./../models/category.model");
const sale_model_1 = require("./../models/sale.model");
const getSale = (saleInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const saleExistWithUser = yield sale_model_1.saleModel.find({ u_id: saleInfo.u_id });
    const filterByCategory = saleExistWithUser.filter((ele) => String(ele.c_id) === saleInfo.c_id);
    if (filterByCategory.length > 0) {
        return { status: 409, message: "category already exist for this user" };
    }
    const existCategory = yield category_model_1.categoryModel.findOne({ _id: saleInfo.c_id });
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
            location: saleInfo.location
        });
        yield newSale.save();
        return { status: 201, message: "successfully created" };
    }
});
exports.getSale = getSale;
