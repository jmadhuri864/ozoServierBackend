import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import route from "./routes/user.routes";
import titleRoute from "./routes/title.routes";
import categoryRoute from "./routes/category.routes";
import serviceRoute from "./routes/service.routes";

const app = express();

app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URL = 'mongodb://localhost:27017/OZOSERVIR';

mongoose.connect(MONGO_URL).then(() => {
    console.log("Database Connect successfully");
    app.listen(PORT, () => {
        console.log(`App Started On Port ${PORT}`);
    })  
}).catch((err) => console.log(err))

app.use('/api/user', route);
app.use('/api/title', titleRoute);
app.use('/api/category', categoryRoute);
app.use('/api/service', serviceRoute);