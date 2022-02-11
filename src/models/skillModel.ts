import { model, Schema } from 'mongoose';
import { ISkill } from '../interfaces/skillInterface';

export const skillSchema = new Schema<ISkill>({
    name: {
        type: String,
        required: true,
    },
    stacks: [{
        type: Schema.Types.ObjectId,
        ref: 'Stack',
        required: true,
    }]
});

export const skillModel = model<ISkill>('Skill', skillSchema);
