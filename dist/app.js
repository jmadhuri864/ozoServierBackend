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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
const service_title_route_1 = __importDefault(require("./routes/service.title.route"));
>>>>>>> e260e265d5e07f3cb406760e0317df0d8a3e88c8
>>>>>>> b83403378b623a4769b06cc45b8a9b9ed2439352
const service_booking_route_1 = __importDefault(require("./routes/service.booking.route"));
const service_category_route_1 = __importDefault(require("./routes/service.category.route"));
const service_review_route_1 = __importDefault(require("./routes/service.review.route"));
const service_route_1 = __importDefault(require("./routes/service.route"));
<<<<<<< HEAD
const service_title_route_1 = __importDefault(require("./routes/service.title.route"));
const auth_route_1 = __importDefault(require("./routes/auth.route"));
=======
<<<<<<< HEAD
const service_title_route_1 = __importDefault(require("./routes/service.title.route"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 1000;
mongoose_1.default
    .connect(URL)
=======
const user_route_1 = require("./routes/user.route");
>>>>>>> b83403378b623a4769b06cc45b8a9b9ed2439352
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const URI = process.env.MONGO_URL;
const PORT = process.env.PORT || 1000;
mongoose_1.default
    .connect(URI)
>>>>>>> e260e265d5e07f3cb406760e0317df0d8a3e88c8
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
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
>>>>>>> b83403378b623a4769b06cc45b8a9b9ed2439352
app.use("/api/service/title", service_title_route_1.default);
app.use("/api/service/category", service_category_route_1.default);
app.use("/api/service", service_route_1.default);
app.use("/api/service/booking", service_booking_route_1.default);
app.use("/api/service/review", service_review_route_1.default);
=======
app.use("/api/user", user_route_1.userRuote);
>>>>>>> e260e265d5e07f3cb406760e0317df0d8a3e88c8
app.use("/api/sale/title", sale_title_route_1.saleTitleRoute);
app.use("/api/sale/category", sale_category_route_1.default);
app.use("/api/sale", sale_route_1.default);
app.use("/api/sale/booking", sale_booking_route_1.saleBookingRouter);
app.use("/api/sale/review", sale_review_route_1.saleReviewRouter);
<<<<<<< HEAD
=======
app.use("/api/service/title", service_title_route_1.default);
app.use("/api/service/category", service_category_route_1.default);
app.use("/api/service", service_route_1.default);
app.use("/api/service/booking", service_booking_route_1.default);
app.use("/api/service/review", service_review_route_1.default);
>>>>>>> e260e265d5e07f3cb406760e0317df0d8a3e88c8
