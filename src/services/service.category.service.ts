import { CategoryDto } from '../dtos/service.category.dto';
import { Category } from '../models/service.category.model';
import { Title } from '../models/service.title.model';
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