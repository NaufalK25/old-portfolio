import { Schema, } from "mongoose";

export interface ISkill {
    _id: Schema.Types.ObjectId;
    name: string;
    stacks: Schema.Types.ObjectId[];
}
