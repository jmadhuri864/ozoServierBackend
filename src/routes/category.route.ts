import { createCategory } from '../controllers/category.controller';
import express,{ Request,Response} from 'express'
import { CreateCategoryDto } from '../dtos/category.dto';
import { validateDto } from '../middleware/validateDto.middleware';
import { authenticateUser } from '../middleware/auth.middleware';

 const router=express.Router();
router.post('/createCategory',authenticateUser,validateDto(CreateCategoryDto),createCategory);

export default router;