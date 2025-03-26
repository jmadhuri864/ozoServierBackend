"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userSignup_controller_1 = require("../controllers/userSignup.controller");
const userLogin_controller_1 = require("../controllers/userLogin.controller");
const validateDto_middleware_1 = require("../middleware/validateDto.middleware");
const auth_dto_1 = require("../dtos/auth.dto");
const auth_dto_2 = require("../dtos/auth.dto");
const router = express_1.default.Router();
router.post("/register", (0, validateDto_middleware_1.validateDto)(auth_dto_1.CreateUserDto), userSignup_controller_1.signup);
router.post("/login", (0, validateDto_middleware_1.validateDto)(auth_dto_2.LoginUserDto), userLogin_controller_1.signin);
exports.default = router;
