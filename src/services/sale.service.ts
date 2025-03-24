
import { categoryModel } from "./../models/category.model";
import { saleModel } from "./../models/sale.model";
import { Category } from "../interfaces/category.interface";
import { Title } from "../interfaces/title.interface";
import { Sale } from "../interfaces/sale.interface";
import { userModel } from "../models/user.model";
import { titleModel } from "../models/title.model";
import { CreateSaleDto } from "../dtos/sale.dto";
import mongoose, { Mongoose, Types, Schema } from "mongoose";

export const getSale = async (saleInfo: CreateSaleDto) => {
  const saleExistWithUser = await saleModel.find({ u_id: saleInfo.u_id });
  const filterByCategory = saleExistWithUser.filter(
    (ele) => String(ele.c_id )===saleInfo.c_id
  );
  if (filterByCategory.length > 0) {
    return { status: 409, message: "category already exist for this user" };
  }
  const existCategory=await categoryModel.findOne({_id:saleInfo.c_id});
  if(existCategory)
  {
    const categoryId=existCategory._id;
    const titleId=existCategory.t_id;
    const newSale = new saleModel({
      u_id:saleInfo.u_id,
      c_id:categoryId,
      t_id:titleId,
      description:saleInfo.description,
      itemImage:saleInfo.itemImage,
      price:saleInfo.price,
      condition:saleInfo.condition,
      location:saleInfo.location
    });
  await newSale.save();
  return { status: 201, message: "successfully created" };
  }
  
};
