"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const sale_title_route_1 = require("./routes/sale.title.route");
const sale_category_route_1 = __importDefault(require("./routes/sale.category.route"));
const sale_route_1 = __importDefault(require("./routes/sale.route"));
const sale_booking_route_1 = require("./routes/sale.booking.route");
const sale_review_route_1 = require("./routes/sale.review.route");
const service_booking_route_1 = __importDefault(require("./routes/service.booking.route"));
const service_category_route_1 = __importDefault(require("./routes/service.category.route"));
const service_review_route_1 = __importDefault(require("./routes/service.review.route"));
const service_route_1 = __importDefault(require("./routes/service.route"));
const service_title_route_1 = __importDefault(require("./routes/service.title.route"));
const auth_route_1 = __importDefault(require("./routes/auth.route"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const URI = process.env.MONGO_URL;
const PORT = process.env.PORT || 1000;
mongoose_1.default
    .connect(URI)
    .then(() => {
    console.log("database connect successfully");
    app.listen(PORT, () => {
        console.log(`app started on port : ${PORT}`);
    });
})
    .catch((err) => console.log("ERROR in database connection", err));
app.use("/", (req, res) => {
    res.status(200).json({ message: "welcome" });
});
app.use("/uploads", express_1.default.static("uploads"));
app.use("/api/auth", auth_route_1.default);
app.use("/api/service/title", service_title_route_1.default);
app.use("/api/service/category", service_category_route_1.default);
app.use("/api/service", service_route_1.default);
app.use("/api/service/booking", service_booking_route_1.default);
app.use("/api/service/review", service_review_route_1.default);
app.use("/api/sale/title", sale_title_route_1.saleTitleRoute);
app.use("/api/sale/category", sale_category_route_1.default);
app.use("/api/sale", sale_route_1.default);
app.use("/api/sale/booking", sale_booking_route_1.saleBookingRouter);
app.use("/api/sale/review", sale_review_route_1.saleReviewRouter);
app.use("/api/service/title", service_title_route_1.default);
app.use("/api/service/category", service_category_route_1.default);
app.use("/api/service", service_route_1.default);
app.use("/api/service/booking", service_booking_route_1.default);
app.use("/api/service/review", service_review_route_1.default);
