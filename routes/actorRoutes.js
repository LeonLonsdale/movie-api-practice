import express from 'express';
import { router as movieRouter } from './movieRoutes.js';
import {
  createActor,
  getActor,
  getAllActors,
  updateActor,
  deleteActor,
  addMovieToActor,
} from './../controllers/actorController.js';

import { getAllMovies } from './../controllers/movieController.js';

export const router = express.Router();

router.route('/').post(createActor).get(getAllActors);
router.route('/:id').get(getActor).patch(updateActor).delete(deleteActor);
router.route('/:id/movies').get(getAllMovies).patch(addMovieToActor);

// /actors/actorId/movies
// router.use('/:actorId/movies', movieRouter);
