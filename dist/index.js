"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const title_routes_1 = __importDefault(require("./routes/title.routes"));
const category_routes_1 = __importDefault(require("./routes/category.routes"));
const service_routes_1 = __importDefault(require("./routes/service.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
dotenv_1.default.config();
const PORT = process.env.PORT || 5000;
const MONGO_URL = 'mongodb://localhost:27017/OZOSERVIR';
mongoose_1.default.connect(MONGO_URL).then(() => {
    console.log("Database Connect successfully");
    app.listen(PORT, () => {
        console.log(`App Started On Port ${PORT}`);
    });
}).catch((err) => console.log(err));
app.use('/api/user', user_routes_1.default);
app.use('/api/title', title_routes_1.default);
app.use('/api/category', category_routes_1.default);
app.use('/api/service', service_routes_1.default);
