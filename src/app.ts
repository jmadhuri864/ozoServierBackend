import express, { Router } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { saleTitleRoute } from "./routes/sale.title.route";
import saleCategoryRoute from "./routes/sale.category.route";
import saleRouter from "./routes/sale.route";
import { saleBookingRouter } from "./routes/sale.booking.route";
import { saleReviewRouter } from "./routes/sale.review.route";
import serviceBookingRoute from "./routes/service.booking.route";
import serviceCategoryRoute from "./routes/service.category.route";
import serviceReviewRoute from "./routes/service.review.route";
import serviceRoute from "./routes/service.route";
import serviceTitleRoute from "./routes/service.title.route";
import authRoute from "./routes/auth.route";
import cors from 'cors';


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


const URI = process.env.MONGO_URL as string;
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



  app.use("/j", (req, res) => {
    res.status(200).send("Hello from Vaishali Developer");
  })

  app.use("/api/auth", authRoute);
  app.use("/api/service/title", serviceTitleRoute);
  app.use("/api/service/category", serviceCategoryRoute);
  app.use("/api/service", serviceRoute);
  app.use("/api/service/booking", serviceBookingRoute); 
  app.use("/api/service/review", serviceReviewRoute);

app.use("/api/sale/title", saleTitleRoute);
app.use("/api/sale/category", saleCategoryRoute);
app.use("/api/sale", saleRouter);
app.use("/api/sale/booking", saleBookingRouter);
app.use("/api/sale/review", saleReviewRouter);


