
import express,{Request,Response} from 'express'
import { postTitle } from '../services/title.service';
export const createTitle=async(req:Request,res:Response)=>{
    const {t_id,tName}=req.body;
    const title=await postTitle(t_id,tName);
    if(title)
    {
        res.status(201).json({message:'created'});
    }
    else
    {
        res.status(409).json({message:`title with ${t_id} already exist`});
    }
}