import { model, Schema } from 'mongoose';
import { IContact } from '../interfaces/contact.interface';

const contactSchema = new Schema<IContact>({
    name: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    svg: {
        type: String,
        required: true
    }
});

export const contactModel = model<IContact>('Contact', contactSchema);
