import { AuthRequest } from "../middlewares/auth.middleware";
import { createBooking, getAllBookingService } from "../services/service.booking.service";
import { Request, Response } from "express";

//Todo : Controller for Post Booking
export const bookingInsert = async (req : AuthRequest, res : Response): Promise<any> => {
    try {
        const userID = req.user.userId;
        const bookingIn = await createBooking(req.body, req.params, userID);
        return res.status(201).json(bookingIn);
    } catch (error) {
        return res.status(500).json({message : "Internal server error"})
    }
}

//Todo : Controller for GetAll Bookings
export const getAllBooking = async (req : AuthRequest, res : Response): Promise<any> => {
    try {

        const userId = req.user; 
       // const userId = authReq.user.id;

        if (!userId) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const result = await getAllBookingService(userId);
        if(!result)
        {
            return res.status(404).json({Message : "Not yet service booking"});
        }

        return res.status(200).json(result);
    } catch (error) {
        
    }
}