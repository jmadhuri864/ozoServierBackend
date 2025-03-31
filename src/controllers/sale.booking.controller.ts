import { AuthRequest } from './../middlewares/auth.middleware';
import {Request,Response} from 'express'
import { createBooking , getAllBookingService} from '../services/sale.booking.service';

//Todo : Post Bookig Controller
export const makeBooking=async(req:AuthRequest,res:Response)=>{
    const u_id=req.user._id;
    console.log(u_id);
    console.log(req.body);
    const booking=await createBooking(req.body,u_id);
    res.status(booking.status).json(booking.message);
}

//Todo : Get All Booking controller
export const getAllBooking=async(req:Request,res:Response)=>{
    const allBooking=await getAllBookingService();
    res.status(allBooking.status).json({message:allBooking.message,data:allBooking.data})

}