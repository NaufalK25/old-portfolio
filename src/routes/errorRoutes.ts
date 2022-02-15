import { Request, Response } from 'express';

export const error404Route = (req: Request, res: Response): void => {
    res.render('error-404', {
        title: '404 Not Found',
        layout: 'layouts/base',
        styles: ['error-404'],
        scripts: ['base'],
    });
}
