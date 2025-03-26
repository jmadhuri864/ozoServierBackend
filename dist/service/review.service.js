"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReview = void 0;
const booking_models_1 = require("../models/booking.models");
const review_models_1 = require("../models/review.models");
const createReview = async (data) => {
    try {
        const { userId, serviceId, rating, description } = data;
        const bookinngExit = await booking_models_1.Booking.find({ $and: [{ userId: userId }, { serviceId: serviceId }] });
        console.log(bookinngExit);
        if (bookinngExit.length === 0) {
            return { message: "Sorry! You are not allowed to review this service since you haven't bought it on Ozoservier." };
        }
        const newReviw = new review_models_1.Review({
            userId,
            serviceId,
            rating,
            description
        });
        const saveReview = await newReviw.save();
        return { message: saveReview };
    }
    catch (error) {
        return { message: "Something wrong" };
    }
};
exports.createReview = createReview;
