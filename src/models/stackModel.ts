import { model, Schema } from 'mongoose';
import { IStack } from '../interfaces/stackInterface';

export const stackSchema = new Schema<IStack>({
    name: {
        type: String,
        required: true,
    },
    svg: {
        type: String,
        required: true,
    },
    skills: [{
        type: Schema.Types.ObjectId,
        ref: 'Skill',
        required: true,
    }],
});
