import { Request, Response } from 'express';
import { baseUrl } from '../config/constants';
import { contactModel } from '../models/contactModel';
import { skillModel } from '../models/skillModel';

export const getIndex = async (req: Request, res: Response): Promise<void> => {
    const skills = await skillModel.find().populate('stacks');
    const contacts = await contactModel.find();
    res.render('index', {
        title: 'Muhammad Naufal Kateni',
        metaUrl: baseUrl,
        metaImage: `${baseUrl}img/muhammad-naufal-kateni.jpg`,
        metaDescription: 'Muhammad Naufal Kateni\'s portfolio website',
        layout: 'layouts/base',
        styles: ['output'],
        scripts: ['global', 'index'],
        contacts,
        skills,
    });
}
