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
exports.getAllReviewService = exports.CreateReview = void 0;
const sale_booking_model_1 = require("../models/sale.booking.model");
const sale_review_model_1 = require("../models/sale.review.model");
const CreateReview = (review, u_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const booking = yield sale_booking_model_1.bookingModel.findOne({
            u_id: u_id,
            s_id: review.s_id,
        });
        console.log(booking);
        if (!booking) {
            return { status: 400, message: "user is not eligible to give review" };
        }
        const newReview = new sale_review_model_1.reviewModel({
            u_id,
            s_id: review.s_id,
            b_id: booking._id,
            description: review.description,
            rating: review.rating,
            timeStamp: Date.now(),
        });
        yield newReview.save();
        return { status: 201, message: "successfully created" };
    }
    catch (error) {
        return { status: 500, message: "Internal server error" };
    }
});
exports.CreateReview = CreateReview;
const getAllReviewService = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allReview = yield sale_review_model_1.reviewModel.find();
        if (!allReview) {
            return { status: 404, message: "no review found" };
        }
        return { status: 200, message: "success", data: allReview };
    }
    catch (error) {
        return { status: 500, message: "Internal Server Error" };
    }
});
exports.getAllReviewService = getAllReviewService;
