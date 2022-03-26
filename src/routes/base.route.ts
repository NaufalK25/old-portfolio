import { Express } from 'express';
import { getIndex } from '../controllers/index.controller';

export const baseRoute = (app: Express) => {
    app.route('/').
        get(getIndex);
};
