
import express,{Request,Response} from 'express'
import { createBooking , getAllBookingService} from '../services/sale.booking.service';
import { CreateBookingDto } from '../dtos/sale.booking.dto';
import { AuthenticatedRequest } from "../middlewares/auth.middleware";
export const makeBooking=async(req:AuthenticatedRequest,res:Response)=>{
    const u_id=req.user._id;
    console.log(u_id);
    console.log(req.body);
    const booking=await createBooking(req.body,u_id);
    res.status(booking.status).json(booking.message);

}
export const getAllBooking=async(req:Request,res:Response)=>{
    const allBooking=await getAllBookingService();
    res.status(allBooking.status).json({message:allBooking.message,data:allBooking.data})

}