import { model, Schema, } from 'mongoose';
import { ISkill, } from '../interfaces/skillInterface';
import { stackSchema, } from '../models/stackModel';

export const skillSchema: Schema<ISkill> = new Schema<ISkill>({
    name: {
        type: String,
        required: true,
    },
    stacks: [{
        type: Schema.Types.ObjectId,
        ref: 'Stack',
        required: true,
        schema: stackSchema,
    }],
});

export const skillModel = model<ISkill>('Skill', skillSchema);
