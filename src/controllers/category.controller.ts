import { CreateCategoryDto } from "./../dtos/category.dto";
import express, { Request, Response } from "express";
import { Category } from "./../interfaces/category.interface";
import { getCatgory } from "../services/category.service";

export const createCategory = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const categoryInfo: CreateCategoryDto = req.body;
    const category = await getCatgory(categoryInfo);

    return res.status(category.status).json(category.message);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
