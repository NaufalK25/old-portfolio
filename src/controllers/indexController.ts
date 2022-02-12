import { Request, Response } from 'express';
import { contactModel } from '../models/contactModel';
import { skillModel } from '../models/skillModel';

export const getIndex = async (req: Request, res: Response): Promise<void> => {
    const skills = await skillModel.find().populate('stacks');
    const contacts = await contactModel.find();
    res.render('index', {
        title: 'Muhammad Naufal Kateni',
        layout: 'layouts/base',
        styles: ['index'],
        scripts: ['index'],
        contacts,
        skills,
    });
}
