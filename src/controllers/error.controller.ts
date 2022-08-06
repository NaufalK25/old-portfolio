import { Request, Response } from 'express';
import { baseUrl } from '../config/constants';

export const error404 = (req: Request, res: Response) => {
    res.render('error-404', {
        title: '404 Not Found',
        meta: {
            url: `${req.protocol}://${req.get('host')}`,
            image: `${baseUrl}img/muhammad-naufal-kateni.jpg`,
            description: 'Page not found'
        },
        layout: 'layouts/base',
        styles: ['output'],
        scripts: ['global']
    });
}
