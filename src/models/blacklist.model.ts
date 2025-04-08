import mongoose, { Document, Schema } from "mongoose";
import { mongo } from "mongoose";

interface IBlacklist extends Document {
    token: string;
    expiresAt: Date;
}

const BlacklistSchema = new Schema<IBlacklist>({
    token: { type: String, required: true },
    expiresAt: { type: Date, required: true },
});

export const Blacklist = mongoose.model<IBlacklist>("Blacklist", BlacklistSchema);

