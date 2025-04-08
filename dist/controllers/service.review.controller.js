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
exports.reviewController = exports.insertReview = void 0;
const service_review_service_1 = require("../services/service.review.service");
//Todo : Controller for Post Review
const insertReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.userId;
        console.log("I am in controller");
        const reviewIn = yield (0, service_review_service_1.createReview)(req.body, req.params, userId);
        if (reviewIn) {
            return res.status(201).json({ message: "Review added successfully" });
        }
        return res
            .status(404)
            .json({
            message: "Sorry! You are not allowed to review this service since you haven't bought it on Ozoservier.",
        });
    }
    catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
});
exports.insertReview = insertReview;
//Todo : Controller for Get All Review
const reviewController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.params);
        //    const{serviceID} = req.params;
        const result = yield (0, service_review_service_1.getReview)(req.params);
        if (!result) {
            return res
                .status(404)
                .json({ message: "Not at any review for thid service" });
        }
        return res.status(200).json(result);
    }
    catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
});
exports.reviewController = reviewController;
