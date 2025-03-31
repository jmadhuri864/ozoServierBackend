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
exports.getAllReview = exports.giveReview = void 0;
const sale_review_service_1 = require("../services/sale.review.service");
const giveReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const u_id = req.user._id;
    const review = yield (0, sale_review_service_1.CreateReview)(req.body, u_id);
    res.status(review.status).json(review.message);
});
exports.giveReview = giveReview;
const getAllReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allReview = yield (0, sale_review_service_1.getAllReviewService)();
    res
        .status(allReview.status)
        .json({ message: allReview.message, allreview: allReview.data });
});
exports.getAllReview = getAllReview;
