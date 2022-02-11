import { Express, Request, Response } from 'express';
import { contactModel } from '../models/contactModel';

export const baseRoutes = async (app: Express): Promise<void> => {
    const contacts = await contactModel.find();
    app.route('/').
        get((req: Request, res: Response): void => {
            res.render('index', {
                contacts
            });
        });
};
