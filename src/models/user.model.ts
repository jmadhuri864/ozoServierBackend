import mongoose from "mongoose";
import { IUser } from "../interfaces/user.interface";

const userSchema = new mongoose.Schema<IUser>(
    {
        profilePhoto : {
            type : String,
            required : true
        },
        lastName : {
            type : String,
            required : true
        },
        firstName : {
            type : String,
            required : true
        },
        phoneNumber : {
            type : String,
            required : true
        },
        emailAddress : {
            type : String,
            required : true
        },
        password : {
            type : String,
            required : true
        },
        termsCondition : {
            type : Boolean,
            required : true
        }
    }
)

export const User = mongoose.model<IUser>("User", userSchema);
