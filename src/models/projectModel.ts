import { model, Schema, } from 'mongoose';
import { IProject, } from '../interfaces/projectInterface';
import { stackSchema, } from '../models/stackModel';

export const projectSchema = new Schema<IProject>({
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

export const projectModel = model<IProject>('Project', projectSchema);
