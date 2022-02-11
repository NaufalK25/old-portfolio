import { Schema } from "mongoose";

export interface IStack {
    _id: Schema.Types.ObjectId;
    name: string;
    svg: string;
    skills: Schema.Types.ObjectId[];
}
