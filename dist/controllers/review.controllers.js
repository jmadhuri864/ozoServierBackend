"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertReview = void 0;
const review_service_1 = require("../service/review.service");
const insertReview = async (req, res) => {
    try {
        const reviewIn = await (0, review_service_1.createReview)(req.body);
        res.status(201).json(reviewIn);
    }
    catch (error) {
    }
};
exports.insertReview = insertReview;
