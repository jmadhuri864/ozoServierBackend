import { CategoryDto } from '../dto/category.dto';
import { TitleDto } from '../dto/title.dto';
import { ITitle } from '../interface/title.interface';
import { Category } from '../models/category.models';
import { Title } from './../models/title.models';
export const createCategory = async (data : CategoryDto) => {
 try {
    //const name = data.name;
    const titleExists = await Title.findOne({name : data.title});
    const categoryExists = await Category.findOne({name : data.name});
    
    if(!titleExists && categoryExists)
    {
            return false;
    }

    if (!titleExists) {
      console.log("Title not found");
      return false;
    }
    const titleId = titleExists._id;
    const newCategory = new Category({
        name : data.name,
        title : titleId
    })
    
    const saveCategory = await newCategory.save();
    return true;
 } catch (error) {
    return {message : "Failed to create category"}
 }   
}