import { createCategory } from '../controllers/sale.category.controller';
import express,{ Request,Response} from 'express'
import { CreateCategoryDto } from '../dtos/sale.category.dto';
import { validateDto } from '../middlewares/validateDto.middleware';
import { authenticateUser } from '../middlewares/auth.middleware';

 const saleCategoryRoute=express.Router();
 saleCategoryRoute.post('/createCategory',authenticateUser,validateDto(CreateCategoryDto),createCategory);

export default saleCategoryRoute;