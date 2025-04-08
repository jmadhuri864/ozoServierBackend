import { Request, Response } from "express";
import { postSale, getAllSale, deleteSale, getSaleService, getUpdatedSale } from "../services/sale.service";
import { CreateSaleDto } from "../dtos/sale.dto";
import { AuthRequest } from "../middlewares/auth.middleware";
export const createSale = async (req: Request, res: Response): Promise<any> => {
  try {
    const saleInfo: CreateSaleDto = req.body;
      if (!req.file) {
          return res.status(400).json({ message: "item image is  is required" });
      }
    
        req.body = req.file.path;
    const sale: any = await postSale( req.body);
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

//Todo : Controller for Delete Sale
export const deleteController = async(req: Request, res: Response) : Promise<any> => {
  try {
    const result = await deleteSale(req.params.id);

    if(!result)
    {
      return res.status(201).json({message : "Sale not found"});
    }

    return res.status(200).json({message : "Sale deleted successfully"}) 
  } catch (error) {
    return res.status(500).json({message : "Internal server error"})
  }
}

export const getSale = async (req: Request, res: Response) => {
  try {
    const title = req.params.name;
    const sale = await getSaleService(title);
    res.status(sale.status).json({ message: sale.message ,data:sale.data});
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
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
