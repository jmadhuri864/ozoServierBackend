import { validate } from "class-validator";
import { plainToInstance } from "class-transformer";
import { Request,Response,NextFunction } from "express";

export const 

validateDto=(validateDto:any)=>
    async(req:Request,res:Response,next:NextFunction):Promise<any>=>{
       const instance= plainToInstance(validateDto,req.body);
      const isValidate= await validate(instance);
      console.log(isValidate);
      console.log(isValidate.length);
      
      if(isValidate.length>0)
      {
        return res.status(400).json({ message: "Validation failed"})
      }
      req.body=instance;
      next();
}

