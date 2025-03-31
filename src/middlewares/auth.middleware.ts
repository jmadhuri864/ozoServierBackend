import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import redisClient from "../config/redis";
import { Blacklist } from "../models/blacklist.model";

dotenv.config();

export interface AuthRequest extends Request {
  user?: any;
}

// export const authenticateUser : any = (req: AuthRequest, res: Response, next: NextFunction) => {
//     const authHeader = req.header("Authorization");
//     if (!authHeader || !authHeader.startsWith("Bearer ")) {
//         return res.status(401).json({ message: "Authorization token is required" });
//     }

//     const token = authHeader.split(" ")[1];
//     try {
//         const decode = jwt.verify(token, process.env.JWT_SECRET as string );
//         req.user = decode ;
//       //  console.log(req.user);

//         next();
//     } catch (error) {
//         return res.status(403).json({message : "Invalid token"});
//     }

// }

export const authMiddleware = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<any> => {
  const authHeader = req.header("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Authorization token is required" });
  }

  const token = authHeader.split(" ")[1];

  try {
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const blacklisted = await Blacklist.findOne({ token });
    if (blacklisted) {
      return res
        .status(401)
        .json({ message: "Token blacklisted. Please log in again." });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
