import { Schema } from "mongoose";

export interface IContact {
    _id: Schema.Types.ObjectId;
    name: string;
    contact: string;
    url: string;
    svg: string;
}
