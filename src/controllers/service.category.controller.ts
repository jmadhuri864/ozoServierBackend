import { Request, Response } from "express";
import { createCategory } from "../services/service.category.service";

export const categoryInsert = async (req: Request, res: Response): Promise <any> => {
    try {
        const categoryIn = await createCategory(req.body);
        
        if(categoryIn)
        {
            return res.status(201).json({message : "Category insert successfullly"});
        }

        return res.status(409).json({message : "Title or category name already exit"});

    } catch (error) {
        res.status(500).json({message : "something Wrong"});
    }
}