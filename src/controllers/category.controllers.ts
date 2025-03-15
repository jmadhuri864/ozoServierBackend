import { createCategory } from "../service/category.service";

export const categoryInsert = async (req: any, res: any) => {
    try {
        const categoryIn = await createCategory(req.body);
        res.status(201).json({categoryIn}); 
    } catch (error) {
        res.status(500).json({message : "something Wrong"});
    }
}