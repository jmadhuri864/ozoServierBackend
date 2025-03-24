import express from 'express'
import { createTitle } from '../controllers/title.controller';
import { CreateTitleDto } from '../dtos/title.dto';
import { validateDto } from '../middleware/validateDto.middleware';
import { authenticateUser } from '../middleware/auth.middleware';
const router=express();
export const route=router.post('/createTitle',validateDto(CreateTitleDto),authenticateUser,createTitle)