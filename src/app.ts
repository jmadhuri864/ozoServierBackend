import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/users.route";
import { route } from "./routes/title.route";
import categoryRouter from "./routes/category.route";
import saleRouter from "./routes/sale.route";
import { bookingRouter } from "./routes/booking.route";

dotenv.config();
const app = express();

app.use(express.json());

const mongoURI: string = "mongodb://127.0.0.1:27017/OZOSERVIR";
const port = process.env.PORT || 1000;

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("database connect successfully");
    app.listen(port, () => {
      console.log(`app started on port : ${port}`);
    });
  })
  .catch((err: Error) => console.log("ERROR in database connection", err));

app.use("/api/user", router);
app.use("/api/title", route);
app.use("/api/category",categoryRouter);
app.use("/api/sale",saleRouter);
app.use("/api/booking",bookingRouter);
