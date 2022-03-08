import { Schema, } from "mongoose";

export interface IStack {
    _id: Schema.Types.ObjectId;
    name: string;
    svg: string;
    skill: Schema.Types.ObjectId;
    projects: Schema.Types.ObjectId[];
}
