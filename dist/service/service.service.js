"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createService = void 0;
const service_models_1 = require("../models/service.models");
const createService = async (data) => {
    try {
        const { userId, titleId, categoryId, setPrice, pricePer, availability, itemPhoto, address } = data;
        const userExit = await service_models_1.Service.find({ userId });
        if (userExit) {
            const filterByTitle = userExit.map((ele) => {
                return ele.titleId === titleId;
            });
            if (filterByTitle) {
                return { message: "Title" };
            }
        }
    }
    catch (error) {
    }
};
exports.createService = createService;
