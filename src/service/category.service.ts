import { Category } from '../models/category.models';
import { category } from './../interface/category.interface';
import { title } from './../interface/title.interface';
import { Title } from './../models/title.models';
export const createCategory = async (data : any) => {
 try {
    const {name, title} = data;
    //console.log(data);

    const titleExists = await Title.findOne({name : title});
    const categoryExists = await Category.findOne({name});
    
    
    if(!titleExists && categoryExists)
    {
            return {message : "Insert new category"};
    }

   

    const newCategory = new Category({
        name,
        title
    })
    //console.log(newCategory);

    const saveCategory = await newCategory.save();
    return {message : "Category Save Successfully", saveCategory}

 } catch (error) {
    return {message : "Failed to create category"}
 }   
}