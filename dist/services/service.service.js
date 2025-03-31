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
exports.getAllService = exports.updateService = exports.createService = void 0;
const service_category_model_1 = require("../models/service.category.model");
const service_model_1 = require("../models/service.model");
=======
exports.getServiceService = exports.getAllService = exports.updateService = exports.createService = void 0;
const service_category_model_1 = require("../models/service.category.model");
const service_model_1 = require("../models/service.model");
const sale_title_model_1 = require("../models/sale.title.model");
>>>>>>> e260e265d5e07f3cb406760e0317df0d8a3e88c8
//Todo : Post Service
const createService = (data, userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categoryExit = yield service_category_model_1.Category.findOne({ name: data.categoryId });
        if (categoryExit) {
            const serviceExit = yield service_model_1.Service.find({ userId: userId });
            const filterByCategory = serviceExit.filter((ele) => ele.categoryId && ele.categoryId.equals(categoryExit._id));
            if (filterByCategory.length > 0) {
                return false;
            }
            const categoryID = categoryExit._id;
            const titleID = categoryExit.title;
            const newService = new service_model_1.Service({
                userId: userId,
                titleId: titleID,
                categoryId: categoryID,
                setPrice: data.setPrice,
                pricePer: data.pricePer,
                availability: data.availability,
                itemPhoto: data.itemPhoto,
                address: data.address,
            });
            const saveService = yield newService.save();
            // console.log("New service saved:", saveService);
            return true;
        }
        else {
            console.log("Category not found");
            return false;
        }
    }
    catch (error) {
        console.error("Error saving service:", error);
        return { message: "Failed to create service" };
    }
});
exports.createService = createService;
//Todo : Update Service
const updateService = (data, serviceID) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateService = yield service_model_1.Service.findByIdAndUpdate(serviceID, data);
        if (!updateService) {
            return { success: false, message: "Service not found", data: null };
        }
        return {
            success: true,
            messge: "Service update successfully",
            data: updateService,
        };
    }
    catch (error) {
        return { message: "Failed to update service" };
    }
});
exports.updateService = updateService;
//Todo : Get All Service
const getAllService = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const services = yield service_model_1.Service.find()
            .populate("userId", "firstName lastName emailAddress")
            .populate("titleId", "name")
            .populate("categoryId", "name");
        return {
            success: true,
            message: "Services fetched successfully",
            data: services,
        };
    }
    catch (error) {
        return { success: false, message: "Internal Server Error" };
    }
});
exports.getAllService = getAllService;
<<<<<<< HEAD
=======
const getServiceService = (title) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getTitle = yield sale_title_model_1.titleModel.findOne({
            tName: { $regex: title.trim(), $options: "i" },
        });
        console.log(getTitle);
        if (!getTitle) {
            return { status: 404, message: "sale not exist" };
        }
        const titleId = getTitle === null || getTitle === void 0 ? void 0 : getTitle._id;
        const getSales = yield service_model_1.Service.find({ t_id: titleId });
        if (getSales.length == 0) {
            return { status: 404, message: "sale not exist" };
        }
        return { status: 200, message: "success", data: getSales };
    }
    catch (error) {
        return { status: 500, message: "Internal Server Error" };
    }
});
exports.getServiceService = getServiceService;
>>>>>>> e260e265d5e07f3cb406760e0317df0d8a3e88c8
