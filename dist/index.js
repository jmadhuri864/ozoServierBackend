"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_SECRET = void 0;
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const service_route_1 = __importDefault(require("./routes/service.route"));
const auth_route_1 = __importDefault(require("./routes/auth.route"));
const service_title_route_1 = __importDefault(require("./routes/service.title.route"));
const service_booking_route_1 = __importDefault(require("./routes/service.booking.route"));
const service_category_route_1 = __importDefault(require("./routes/service.category.route"));
const service_review_route_1 = __importDefault(require("./routes/service.review.route"));
const sale_title_route_1 = require("./routes/sale.title.route");
const sale_category_route_1 = __importDefault(require("./routes/sale.category.route"));
const sale_route_1 = __importDefault(require("./routes/sale.route"));
const sale_booking_route_1 = require("./routes/sale.booking.route");
const sale_review_route_1 = require("./routes/sale.review.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
dotenv_1.default.config();
exports.JWT_SECRET = process.env.JWT_SECRET;
const PORT = process.env.PORT || 5000;
const MONGO_URL = "mongodb://localhost:27017/OZOSERVIR";
//const MONGO_URL = "mongodb+srv://Shri:@shri07.iezxf.mongodb.net/?retryWrites=true&w=majority&appName=Shri07";
mongoose_1.default
    .connect(MONGO_URL)
    .then(() => {
    console.log("Database Connect successfully");
    app.listen(PORT, () => {
        console.log(`App Started On Port ${PORT}`);
    });
})
    .catch((err) => console.log(err));
app.use("/api/user", auth_route_1.default);
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
