import { Request, Response } from 'express';
import { baseUrl } from '../config/constants';

export const error404 = (req: Request, res: Response) => {
    const url = req.url;
    let subtractor = url.endsWith('/') ? 1 : 2;

    let urlLength = url.replace(/\/$/, '').split('/').length - subtractor;
    if (urlLength < 0) urlLength = 0;

    let trailingDotUrl = '';
    for (let i = 0; i < urlLength; i++) {
        trailingDotUrl += '../';
    }

    res.render('error-404', {
        title: '404 Not Found',
        metaUrl: `${req.protocol}://${req.get('host')}`,
        metaImage: `${baseUrl}img/muhammad-naufal-kateni.jpg`,
        metaDescription: 'Page not found',
        layout: 'layouts/base',
        styles: ['output'],
        scripts: ['global'],
        trailingDotUrl,
    });
}
