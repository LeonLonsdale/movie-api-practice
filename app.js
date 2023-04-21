import express from 'express';

import { router as movieRoutes } from './routes/movieRoutes.js';
import { router as actorRoutes } from './routes/actorRoutes.js';
import { router as reviewRoutes } from './routes/reviewRouts.js';
import globalErrorHandler from './controllers/errorController.js';

export const app = express();

app.use(express.json());

app.use('/api/v1/movies', movieRoutes);
app.use('/api/v1/actors', actorRoutes);
app.use('/api/v1/reviews', reviewRoutes);
app.use(globalErrorHandler);
