import mongoose from "mongoose";

export interface Sale{
    u_id:mongoose.Schema.Types.ObjectId;
    t_id:mongoose.Schema.Types.ObjectId;
    c_id:mongoose.Schema.Types.ObjectId;
    description:string;
    itemImage:[string];
    price:number;
    condition:string;
    location:string;

}