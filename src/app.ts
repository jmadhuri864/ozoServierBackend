import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.route";
import { saleTitleRoute } from "./routes/sale.title.route";
import saleCategoryRoute from "./routes/sale.category.route";
import saleRouter from "./routes/sale.route";
import { saleBookingRouter } from "./routes/sale.booking.route";
import { saleReviewRouter } from "./routes/sale.review.route";

dotenv.config();
const app = express();

app.use(express.json());

const URI = process.env.MONGO_URI as string;
const PORT = process.env.PORT || 1000;
mongoose
  .connect(URI)
  .then(() => {
    console.log("database connect successfully");
    app.listen(PORT, () => {
      console.log(`app started on port : ${PORT}`);
    });
  })
  .catch((err: Error) => console.log("ERROR in database connection", err));

app.use("/api/user", authRoute);
app.use("/api/sale/title", saleTitleRoute);
app.use("/api/sale/category", saleCategoryRoute);
app.use("/api/sale", saleRouter);
app.use("/api/sale/booking", saleBookingRouter);
app.use("/api/sale/review", saleReviewRouter);
