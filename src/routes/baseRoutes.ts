import { Express, Request, Response } from 'express';

export const baseRoutes = (app: Express): void => {
    app.route('/').
        get((req: Request, res: Response): void => {
            res.render('index');
        });
};
