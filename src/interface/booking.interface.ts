import mongoose from "mongoose";

export interface booking {
    User : mongoose.Types.ObjectId;
    service : mongoose.Types.ObjectId;
    time : string;
    date : Date;
    status : string;
}