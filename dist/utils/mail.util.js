"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = exports.sendWelcomeEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const transporter = nodemailer_1.default.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});
const sendWelcomeEmail = (to, name) => __awaiter(void 0, void 0, void 0, function* () {
    const mailOptions = {
        from: "your-email@gmail.com",
        to: to,
        subject: "Welcome to Ozoservier",
        html: `<h2>Hello, ${name}!</h2>
             <p>Thank you for registering with us. We're excited to have you on board!</p>
             <p>Enjoy our services! </p>`,
    };
    try {
        yield transporter.sendMail(mailOptions);
        // console.log(`Email sent to ${to}`);
    }
    catch (error) {
        console.error(" Error sending email:", error);
    }
});
exports.sendWelcomeEmail = sendWelcomeEmail;
const sendMail = (to, subject, text) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield transporter.sendMail({
            from: `"Ozoservier" <${process.env.EMAIL_USER}>`,
            to,
            subject,
            text,
        });
        console.log("Email sent to", to);
    }
    catch (error) {
        console.error("Error sending email:", error);
        throw new Error("Email could not be sent");
    }
});
exports.sendMail = sendMail;
