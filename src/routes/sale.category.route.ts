import { authMiddleware } from './../middlewares/auth.middleware';
import { createCategory } from '../controllers/sale.category.controller';
import express,{ Request,Response} from 'express'
import { CreateCategoryDto } from '../dtos/sale.category.dto';
import { validateDto } from '../middlewares/validateDto.middleware';

 const saleCategoryRoute=express.Router();
 saleCategoryRoute.post('/createCategory', validateDto(CreateCategoryDto), authMiddleware, createCategory);

export default saleCategoryRoute;