import { Express } from 'express';
import { getIndex } from '../controllers/indexController';

export const baseRoutes = (app: Express): void => {
    app.route('/').
        get(getIndex);
};
