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

export const sendWelcomeEmail = async (to: string, name: string) => {
    const mailOptions = {
      from: "your-email@gmail.com",
      to: to,
      subject: "Welcome to Ozoservier",
      html: `<h2>Hello, ${name}!</h2>
             <p>Thank you for registering with us. We're excited to have you on board!</p>
             <p>Enjoy our services! </p>`,
    };
  
    try {
      await transporter.sendMail(mailOptions);
     // console.log(`Email sent to ${to}`);
    } catch (error) {
      console.error(" Error sending email:", error);
    }
  };
  

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

