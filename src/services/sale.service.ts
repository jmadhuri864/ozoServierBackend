import { categoryModel } from "../models/sale.category.model";
import { saleModel } from "./../models/sale.model";
import { Category } from "../interfaces/sale.category.interface";
import { Title } from "../interfaces/sale.title.interface";
import { Sale } from "../interfaces/sale.interface";
import { userModel } from "../models/user.model";
import { titleModel } from "../models/sale.title.model";
import { CreateSaleDto } from "../dtos/sale.dto";
import mongoose, { Mongoose, Types, Schema } from "mongoose";

export const postSale = async (saleInfo: CreateSaleDto) => {
  const saleExistWithUser = await saleModel.find({ u_id: saleInfo.u_id });
  const filterByCategory = saleExistWithUser.filter(
    (ele) => String(ele.c_id) === saleInfo.c_id
  );
  if (filterByCategory.length > 0) {
    return { status: 409, message: "category already exist for this user" };
  }
  const existCategory = await categoryModel.findOne({ _id: saleInfo.c_id });
  if (existCategory) {
    const categoryId = existCategory._id;
    const titleId = existCategory.t_id;
    const newSale = new saleModel({
      u_id: saleInfo.u_id,
      c_id: categoryId,
      t_id: titleId,
      description: saleInfo.description,
      itemImage: saleInfo.itemImage,
      price: saleInfo.price,
      condition: saleInfo.condition,
      location: saleInfo.location,
    });
    await newSale.save();
    return { status: 201, message: "successfully created" };
  }
};

export const getAllSale = async () => {
  try {
    const allSale = await saleModel.find();
    if (!allSale) {
      return { status: 404, message: "no sale found" };
    }
    return { status: 200, message: "success", data: allSale };
  } catch (error) {
    return { status: 500, message: "Internal server error" };
  }
};
