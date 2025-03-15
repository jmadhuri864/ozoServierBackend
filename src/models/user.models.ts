import mongoose from "mongoose";
import { user } from "../interface/user.interface";

const userSchema = new mongoose.Schema<user>(
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

export const User = mongoose.model<user>("User", userSchema);