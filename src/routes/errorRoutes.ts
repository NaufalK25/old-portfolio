import { Request, Response, } from 'express';
import { baseUrl, } from '../config/constants';

export const error404Route = (req: Request, res: Response) => {
    res.render('error-404', {
        title: '404 Not Found',
        metaUrl: `${req.protocol}://${req.get('host')}`,
        metaImage: `${baseUrl}img/muhammad-naufal-kateni.jpg`,
        metaDescription: 'Page not found',
        layout: 'layouts/base',
        styles: ['output'],
        scripts: ['global'],
    });
}
