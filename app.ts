import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import { baseUrl, port } from './src/config/constants';
import { baseRoutes } from './src/routes/baseRoutes';

// Get all environment variables
dotenv.config();

const app = express();

// Third Party Middlewares
app.use(morgan('dev'));
app.set('views', './src/views');
app.set('view engine', 'ejs');
// Express Middlewares
app.use(express.static('public'));
app.use(express.static('dist/public'));
app.use('/uploads', express.static('uploads'));

// Connect to database
require('./src/config/database');

// Routes
baseRoutes(app);

// Start server
app.listen(port, (): void => {
    console.log(`Portfolio is listening to ${baseUrl}`);
});
