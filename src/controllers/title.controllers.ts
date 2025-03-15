import { createTitle } from "../service/title.service";

export const titleInsert = async (req : any, res : any) => {
    try {
        const titleIn = await createTitle(req.body);
        res.status(201).json({titleIn});
    } catch (error) {
        res.status(500).json({message : "Something Wrong"});
    }
}