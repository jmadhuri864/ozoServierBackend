import express from 'express'
import { createTitle } from '../controllers/title.controller';
const router=express();
export const route=router.post('/createTitle',createTitle)