import { createReview } from "../service/review.service";

export const insertReview = async (req : any, res : any) => {
    try {
        const reviewIn = await createReview(req.body, req.params);

        if(reviewIn)
        {
            return res.status(201).json({message : "Review added successfully"})
        }

        return res.status(404).json({message : "Sorry! You are not allowed to review this service since you haven't bought it on Ozoservier."})
        
    } catch (error) {
        return res.status(500).json({message : "Internal server error"})
    }
}