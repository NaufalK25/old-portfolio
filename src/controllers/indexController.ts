import { Request, Response } from 'express';
import { contactModel } from '../models/contactModel';

export const getIndex = async (req: Request, res: Response): Promise<void> => {
    const contacts = await contactModel.find();
    res.render('index', {
        contacts
    });
}
