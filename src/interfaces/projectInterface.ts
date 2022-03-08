import { Schema, } from 'mongoose';

export interface IProject {
    _id: Schema.Types.ObjectId;
    name: string;
    stacks: Schema.Types.ObjectId[];
}
