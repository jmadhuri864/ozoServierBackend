import { Request, Response } from "express";
import { createReview, getReview } from "../services/service.review.service";
import { AuthRequest } from "../middlewares/auth.middleware";

//Todo : Controller for Post Review
export const insertReview = async (req : AuthRequest, res : Response): Promise<any> => {
    try {
        const userId = req.user.userId;
        console.log("I am in controller");
        
        const reviewIn = await createReview(req.body, req.params, userId);
        if(reviewIn)
        {
            return res.status(201).json({message : "Review added successfully"})
        }

        return res.status(404).json({message : "Sorry! You are not allowed to review this service since you haven't bought it on Ozoservier."})
    } catch (error) {
        return res.status(500).json({message : "Internal server error"})
    }
}

//Todo : Controller for Get All Review
export const reviewController = async (req : Request, res : Response): Promise<any> => {
    try {
        console.log(req.params);
    //    const{serviceID} = req.params;
        
        const result = await getReview(req.params);

        if(!result)
        {
            return res.status(404).json({message : "Not at any review for thid service"})
        }
        
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({message : "Internal server error"})
    }
}