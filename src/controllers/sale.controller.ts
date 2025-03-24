import express,{Request,Response} from 'express'
import { getSale } from '../services/sale.service';
import { Sale } from '../interfaces/sale.interface';
import { CreateSaleDto } from '../dtos/sale.dto';
export const createSale=async(req:Request,res:Response):Promise<any>=>{
    try{
        const saleInfo:CreateSaleDto=req.body;
        const sale:any=await getSale(saleInfo);
        console.log(sale)
        return res.status(sale.status).json(sale.message);
    }catch(error)
    {
        return res.status(500).json({message:'Internal Server error'}),error;
    }
   

}