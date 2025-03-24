"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const users_route_1 = __importDefault(require("./routes/users.route"));
const title_route_1 = require("./routes/title.route");
const category_route_1 = __importDefault(require("./routes/category.route"));
const sale_route_1 = __importDefault(require("./routes/sale.route"));
const booking_route_1 = require("./routes/booking.route");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const mongoURI = "mongodb://127.0.0.1:27017/OZOSERVIR";
const port = process.env.PORT || 1000;
mongoose_1.default
    .connect(mongoURI)
    .then(() => {
    console.log("database connect successfully");
    app.listen(port, () => {
        console.log(`app started on port : ${port}`);
    });
})
    .catch((err) => console.log("ERROR in database connection", err));
app.use("/api/user", users_route_1.default);
app.use("/api/title", title_route_1.route);
app.use("/api/category", category_route_1.default);
app.use("/api/sale", sale_route_1.default);
app.use("/api/booking", booking_route_1.bookingRouter);
