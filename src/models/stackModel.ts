import { model, Schema } from 'mongoose';
import { IStack } from '../interfaces/stackInterface';
import { skillSchema } from '../models/skillModel';

export const stackSchema = new Schema<IStack>({
    name: {
        type: String,
        required: true,
    },
    svg: {
        type: String,
        required: true,
    },
    skill: {
        type: Schema.Types.ObjectId,
        ref: 'Skill',
        required: true,
    },
});

export const stackModel = model<IStack>('Stack', stackSchema);
