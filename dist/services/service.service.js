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
exports.searchService = exports.deleteService = exports.getAllService = exports.updateService = exports.createService = void 0;
const service_category_model_1 = require("../models/service.category.model");
const service_model_1 = require("../models/service.model");
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
            const newService = new service_model_1.Service(Object.assign(Object.assign({}, data), { userId: userId, categoryId: categoryID, titleId: titleID }));
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
const getAllService = (paramsQuery) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { page, limit } = paramsQuery;
        //  console.log(limit);
        const pageData = Number(page) || 1;
        const limitdata = Number(limit) || 2;
        const skip = (pageData - 1) * limitdata;
        //  console.log(`${pageData} ${limitdata}`);
        const services = yield service_model_1.Service.find()
            .skip(skip)
            .limit(limitdata)
            .populate("categoryId", "name -_id")
            .populate("titleId", "name -_id")
            .populate("userId", "lastName firstName emailAddress -_id");
        //  console.log(services);
        return { services, dataLength: services.length };
    }
    catch (error) {
        return { success: false, message: "Internal Server Error" };
    }
});
exports.getAllService = getAllService;
//Todo : Delete Service
const deleteService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield service_model_1.Service.findByIdAndDelete({ _id: data });
    }
    catch (error) {
        return { status: 500, message: "Internal server error" };
    }
});
exports.deleteService = deleteService;
//Todo : Search Service
const searchService = (key) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield service_model_1.Service.find({ titleId: key });
    }
    catch (error) {
    }
});
exports.searchService = searchService;
