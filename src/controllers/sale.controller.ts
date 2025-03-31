import express, { Request, Response } from "express";
import { postSale, getAllSale, getSaleService } from "../services/sale.service";
import { Sale } from "../interfaces/sale.interface";
import { CreateSaleDto } from "../dtos/sale.dto";
import { getUpdatedSale } from "../services/sale.service";
import { AuthRequest } from "../middlewares/auth.middleware";
export const createSale = async (req: Request, res: Response): Promise<any> => {
  try {
    const saleInfo: CreateSaleDto = req.body;
    const sale: any = await postSale(saleInfo);
    console.log(sale);
    return res.status(sale.status).json(sale.message);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server error" }), error;
  }
};
export const getAll = async (req: Request, res: Response) => {
  const allSale = await getAllSale();
  console.log(allSale);
  res
    .status(allSale.status)
    .json({ message: allSale.message, allSale: allSale.data });
};

export const updateSale = async (req: AuthRequest, res: Response) => {
  try {
    const id = req.params.userId;
    const data = req.body;
    const updatedSale = await getUpdatedSale(id, data);
    res.status(updatedSale.status).json({ message: updatedSale.message });
  } catch (error) {
    res.status(500).json({ message: "Internal Server error" });
  }
};

export const getSale = async (req: Request, res: Response) => {
  try {
    const title = req.params.name;
    const sale = await getSaleService(title);
    res.status(sale.status).json({ message: sale.message ,data:sale.data});
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
