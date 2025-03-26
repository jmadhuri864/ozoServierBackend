
import express,{NextFunction, Request,Response} from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export interface AuthenticatedRequest extends Request {
  user?: any 
}

export const authenticateUser=async (req:AuthenticatedRequest,res:Response,next:NextFunction):Promise<any>=>{
    try{
      //  console.log(req.body);
        
        const token=req.header("Authorization");
        console.log(token);
        if (!token) return res.status(401).json({ message: "Unauthorized: No token provided" });
        
        if (!token.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Unauthorized: Invalid token format" });
          }
    const extractedToken=token.replace('Bearer ',"");
    console.log(extractedToken);
    const decoded:any=jwt.verify(extractedToken,process.env.JWT_SECRET as string)
    
    
    req.user=decoded;
    console.log(req.user);
    
    console.log(req.body);
    
    next();
    }
    catch (error: any) {
        console.error("JWT Authentication Error:", error.message);
        res.status(401).json({ message: "Unauthorized: Invalid or expired token" });
      }
    };

    
    

    


