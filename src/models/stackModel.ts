import { model, Schema, } from 'mongoose';
import { IStack, } from '../interfaces/stackInterface';
import { projectSchema, } from '../models/projectModel';

export const stackSchema: Schema<IStack> = new Schema<IStack>({
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
    projects: [{
        type: Schema.Types.ObjectId,
        ref: 'Project',
        required: true,
        schema: projectSchema,
    }],
});

export const stackModel = model<IStack>('Stack', stackSchema);
