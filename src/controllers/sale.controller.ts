import { Request, Response } from "express";
import { postSale, getAllSale, deleteSale } from "../services/sale.service";
import { CreateSaleDto } from "../dtos/sale.dto";
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

