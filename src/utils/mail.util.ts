import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export const sendMail = async (to: string, subject: string, text: string) => {
    try {
        await transporter.sendMail({
            from: `"Ozoservier" <${process.env.EMAIL_USER}>`,
            to,
            subject,
            text,
        });
        console.log("Email sent to", to);
    } catch (error) {
        console.error("Error sending email:", error);
        throw new Error("Email could not be sent");
    }
};