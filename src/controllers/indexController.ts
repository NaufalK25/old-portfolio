import { Request, Response } from 'express';
import { contactModel } from '../models/contactModel';
import { projectModel } from '../models/projectModel';
import { skillModel } from '../models/skillModel';

export const getIndex = async (req: Request, res: Response): Promise<void> => {
    const skills = await skillModel.find().populate('stacks');
    const contacts = await contactModel.find();
    const projects = await projectModel.find().populate('stacks');
    res.render('index', {
        title: 'Muhammad Naufal Kateni',
        layout: 'layouts/base',
        styles: ['index'],
        scripts: ['index'],
        contacts,
        skills,
        projects,
    });
}
