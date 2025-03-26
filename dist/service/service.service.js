"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createService = void 0;
const service_models_1 = require("../models/service.models");
const createService = async (data) => {
    try {
        const { userId, titleId, categoryId, setPrice, pricePer, availability, itemPhoto, address } = data;
        const serviceExit = await service_models_1.Service.find({ userId });
        const filterByCategory = serviceExit.filter(ele => String(ele.categoryId) === categoryId);
        if (filterByCategory.length > 0) {
            return { Message: "Already This category of service provide please change category" };
        }
        if (!userId || !titleId || !categoryId || !setPrice || !itemPhoto || !address) {
            console.error("Missing required fields:", { userId, titleId, categoryId, setPrice, itemPhoto, address });
            return { message: "Missing required fields" };
        }
        const newService = new service_models_1.Service({
            userId,
            titleId,
            categoryId,
            setPrice,
            pricePer,
            availability,
            itemPhoto,
            address
        });
        console.log(newService);
        const saveService = await newService.save();
        return { saveService };
    }
    catch (error) {
        console.error("Error saving service:", error);
        return { message: "Failed to create service" };
    }
};
exports.createService = createService;
