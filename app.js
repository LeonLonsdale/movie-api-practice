import express from 'express';

import {router as movieRoutes} from './routes/movieRoutes.js';
import globalErrorHandler from './controllers/errorController.js';

export const app = express();

app.use(express.json());

app.use('/api/v1/movies', movieRoutes);
app.use(globalErrorHandler);
