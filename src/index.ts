import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import titleRoute from "./routes/title.routes";
import categoryRoute from "./routes/category.routes";
import serviceRoute from "./routes/service.routes";
import bookingRoute from "./routes/booking.routes";
import reviewRoute from "./routes/review.routes";
import userRoute from "./routes/user.routes";


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

app.use("/api/user", userRoute);
app.use("/api/title", titleRoute);
app.use("/api/category", categoryRoute);
app.use("/api/service", serviceRoute);
app.use("/api/booking", bookingRoute); 
app.use("/api/review", reviewRoute);
