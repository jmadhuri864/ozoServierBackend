import dotenv from "dotenv";
import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
//import { isBlackListed } from "../services/auth.service";

dotenv.config();

export interface AuthRequest extends Request {
  user?: any;
}

export const authenticateUser: any = async(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.header("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Authorization token is required" });
  }

  const token = authHeader.split(" ")[1];
  try {
    // const blackListed=await isBlackListed(token);

    // if (blackListed) {
    //     return res.status(401).json({ message: "Unauthorized: Token is blacklisted" });
    // }

    const decode = jwt.verify(token, process.env.JWT_SECRET as string);
    req.user = decode;
    //  console.log(req.user);

    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid token" });
  }
};
