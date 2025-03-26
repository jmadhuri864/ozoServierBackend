import { Request, Response } from "express";
import { titleService } from "../services/service.title.service";

export const titleController = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    console.log(req.body);
    console.log("hiiiiiiiii");
    
    
    const titleIn = await titleService(req.body);

    if (titleIn) {
      return res.status(201).json({ message: "Title insert successfully" });
    }

    return res.status(409).json({ message: "Title name already exit" });
  } catch (error) {
    res.status(500).json({ message: "Something Wrong" });
  }
};
