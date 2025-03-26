import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import serviceRoute from "./routes/service.route";
import authRoute from "./routes/auth.route";
import serviceTitleRoute from "./routes/service.title.route";
import serviceBookingRoute from "./routes/service.booking.route";
import serviceCategoryRoute from "./routes/service.category.route";
import serviceReviewRoute from "./routes/service.review.route";


const app = express();

app.use(express.json());

dotenv.config();

export const JWT_SECRET = process.env.JWT_SECRET;

const PORT = process.env.PORT || 5000;
const MONGO_URL = "mongodb://localhost:27017/OZOSERVIR";
//const MONGO_URL = "mongodb+srv://Shri:@shri07.iezxf.mongodb.net/?retryWrites=true&w=majority&appName=Shri07";

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Database Connect successfully");
    app.listen(PORT, () => {
      console.log(`App Started On Port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));

app.use("/api/user", authRoute);
app.use("/api/service/title", serviceTitleRoute);
app.use("/api/service/category", serviceCategoryRoute);
app.use("/api/service", serviceRoute);
app.use("/api/service/booking", serviceBookingRoute); 
app.use("/api/service/review", serviceReviewRoute);
