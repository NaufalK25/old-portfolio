import { Request, Response } from 'express';
import { baseUrl } from '../config/constants';
import { contactModel } from '../models/contact.model';
import { skillModel } from '../models/skill.model';

export const getIndex = async (req: Request, res: Response) => {
    const skills = await skillModel.find().populate('stacks');
    const contacts = await contactModel.find();
    res.render('index', {
        title: 'Muhammad Naufal Kateni',
        meta: {
            url: baseUrl,
            image: `${baseUrl}img/muhammad-naufal-kateni.jpg`,
            description: 'Muhammad Naufal Kateni\'s portfolio website'
        },
        layout: 'layouts/base',
        styles: ['output'],
        scripts: ['global', 'index'],
        contacts,
        skills
    });
}
