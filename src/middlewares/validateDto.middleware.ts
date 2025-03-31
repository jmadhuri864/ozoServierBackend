import { Request, Response, NextFunction } from "express";
import { validate } from "class-validator";
import { plainToInstance } from "class-transformer";

export const validateDto =
  (validateDto: any) =>
  async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const logiData = plainToInstance(validateDto, req.body);
    const errors = await validate(logiData);
    //  console.log(errors);

    if (errors.length > 0) {
      return res.status(400).json({ message: "Validation failed" });
    }
    //  console.log(logiData);

    req.body = logiData;
    next();
  };
