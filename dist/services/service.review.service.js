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
exports.getReview = exports.createReview = void 0;
const service_booking_model_1 = require("../models/service.booking.model");
const service_review_model_1 = require("../models/service.review.model");
//Todo : Post Review
const createReview = (data, paramsData, userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { serviceid } = paramsData;
        console.log(serviceid);
        const bookingExit = yield service_booking_model_1.Booking.find({
            $and: [{ userId: userId }, { serviceId: serviceid }],
        });
        console.log("i am in service layer");
        if (!bookingExit) {
            return false;
        }
        const newReviw = new service_review_model_1.Review({
            userId: userId,
            serviceId: serviceid,
            rating: data.rating,
            description: data.description,
        });
        const saveReview = yield newReviw.save();
        return true;
    }
    catch (error) {
        return { message: "Something wrong" };
    }
});
exports.createReview = createReview;
//Todo : Get Review
const getReview = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { serviceid } = data;
        console.log(data);
        const getReview = yield service_review_model_1.Review.find({ serviceId: serviceid })
            .populate({
            path: "serviceId",
            // select : "setPrice pricePer itemPhoto -_id",
            populate: [
                { path: "titleId", select: "name -_id" },
                { path: "categoryId", select: "name -_id" },
            ],
        })
            .populate("userId", "firstName lastName -_id")
            .select("-_id -__v");
        //  console.log(getReview)
        if (!getReview) {
            return false;
        }
        return getReview;
    }
    catch (error) {
        return { message: "Something wrong" };
    }
});
exports.getReview = getReview;
