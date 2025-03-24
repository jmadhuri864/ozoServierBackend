
import express,{Request,Response} from 'express'
import { createBooking } from '../services/booking.service';
import { CreateBookingDto } from '../dtos/booking.dto';
import { AuthenticatedRequest } from "../middleware/auth.middleware";
export const makeBooking=async(req:Request,res:Response)=>{
    //const user:AuthenticatedRequest=
    //const validBookingInfo:CreateBookingDto=req.body;

    //const booking=await createBooking(validBookingInfo);

}