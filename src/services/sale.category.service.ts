import { Category } from "../interfaces/sale.category.interface";
import { categoryModel } from "../models/sale.category.model";
import { titleModel } from "../models/sale.title.model";
import { CreateCategoryDto } from "../dtos/sale.category.dto";
import mongoose from "mongoose";

export const getCatgory = async (categoryInfo: CreateCategoryDto) => {
  const t_id = categoryInfo.t_id;
  const title = await titleModel.findOne({ _id: t_id });
  console.log(title);

  if (!title) {
    return { status: 400, message: "title does not exist" };
  } else {
    const category = await categoryModel.findOne({ cName: categoryInfo.cName });
    if (category) {
      return { status: 409, message: "category already exist" };
    }
    const newCategory = new categoryModel({
      ...categoryInfo,
    });
    await newCategory.save();
    return { status: 201, message: "successfully created" };
  }
};
