import { AuthRequest } from "../middlewares/auth.middleware";
import {
  createService,
  getAllService,
  updateService,
  getServiceService
} from "../services/service.service";
import { Request, Response } from "express";

//Todo : Controller for Post Service
export const createController = async (
  req: AuthRequest,
  res: Response
): Promise<any> => {
  try {
    const userId = req.user.userId;
    const serviceIn = await createService(req.body, userId);

    if (serviceIn) {
      return res.status(201).json({ message: "Service created successfully" });
    }

    return res
      .status(409)
      .json({ Message: "Already youn provided this type of service" });
  } catch (error) {
    return res.status(500).json({ message: "Something Wrong" });
  }
};

//Todo : Controller for Update Service
export const updateController = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const result = await updateService(req.body, req.params);

    if (!result?.success) {
      return res
        .status(result?.messge === "Service not found" ? 404 : 405)
        .json(result);
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

//Todo : Controller for GetAll Servics
export const getAllController = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const result = await getAllService();
    if (!result.success) {
      return res.status(500).json(result);
    }

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getService = async (req: Request, res: Response) => {
  try {
    const title = req.params.name;
    const service = await getServiceService(title);
    res.status(service.status).json({ message: service.message ,data:service.data});
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
