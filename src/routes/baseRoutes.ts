import { Express } from 'express';
import { getIndex } from '../controllers/indexController';
import { error404Route } from '../routes/errorRoutes';

export const baseRoutes = (app: Express): void => {
    app.route('/').
        get(getIndex);
    app.get('*', error404Route);
};
