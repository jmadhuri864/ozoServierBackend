import express, { Request, Response } from "express";
import { postTitle } from "../services/sale.title.service";
import { Title } from "../interfaces/sale.title.interface";
import { CreateTitleDto } from "../dtos/sale.title.dto";
export const createTitle = async (req: Request, res: Response) => {
  const titleInfo: CreateTitleDto = req.body;
  const title = await postTitle(titleInfo);
  if (title) {
    res.status(201).json({ message: "created" });
  } else {
    res.status(409).json({ message: `title already exist` });
  }
};
