import { createService } from "../service/service.service";

export const insertService = async (req : any, res : any) => {
    try {
        const serviceIn = await createService(req.body);
        res.status(201).json(serviceIn);
    } catch (error) {
        res.status(500).json({message : "Something Wrong"});
    }
}