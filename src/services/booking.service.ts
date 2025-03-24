

import { CreateBookingDto } from "../dtos/booking.dto"
import { bookingModel } from "../models/booking.model"
import { AuthenticatedRequest } from "../middleware/auth.middleware";

export const createBooking=async(validBookingInfo:CreateBookingDto)=>{
   // const id:AuthenticatedRequest;
    
    const booking=new bookingModel({
     //   u_id;
        
    });
    

}
