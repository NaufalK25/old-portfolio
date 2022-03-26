import { Express } from 'express';
import { error404 } from '../controllers/error.controller';

export const errorRoute = (app: Express) => {
    app.use(error404);
};
