import { Length } from 'class-validator';
import { Sale } from "./../interfaces/sale.interface";
import { categoryModel } from "../models/sale.category.model";
import { saleModel } from "./../models/sale.model";
import { Category } from "../interfaces/sale.category.interface";
import { Title } from "../interfaces/sale.title.interface";
import { User } from "../models/user.model";
import { titleModel } from "../models/sale.title.model";
import { CreateSaleDto } from "../dtos/sale.dto";
import mongoose, { Mongoose, Types, Schema } from "mongoose";
import { UpdateSaleDto } from "../dtos/sale.update.dto";
import { title } from "process";

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

export const getUpdatedSale = async (id: any, data: UpdateSaleDto) => {
  try {
    const updatedSale = await saleModel.findByIdAndUpdate(id, data);
    if (!updatedSale) {
      return { status: 404, message: "sale not found" };
    }
    console.log(updatedSale);
    return { status: 200, message: "updated successfully" };
  } catch (error) {
    return { status: 5000, message: "Internal server error" };
  }
};

export const getSaleService = async (title: string) => {
  try {
    const getTitle = await titleModel.findOne({
     tName: { $regex: title.trim(), $options: "i" },
    });
    console.log(getTitle);
    
    if (!getTitle) {
      return { status: 404, message: "sale not exist" };
    }
    const titleId = getTitle?._id;
    const getSales = await saleModel.find({ t_id:
      
      titleId });

    if (getSales.length==0) {
      return { status: 404, message: "sale not exist" };
    }
    return { status: 200, message: "success", data: getSales };
  } catch (error) {
    return { status: 500, message: "Internal Server Error" };
  }
};
