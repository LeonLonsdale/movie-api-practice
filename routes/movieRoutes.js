import express from 'express';
import {
  createMovie,
  getAllMovies,
  getMovie,
  updateMovie,
  deleteMovie,
  addActorToMovie,
} from './../controllers/movieController.js';
import { getAllActors } from './../controllers/actorController.js';

export const router = express.Router();

router.route('/').post(createMovie).get(getAllMovies);
router.route('/:id').get(getMovie).patch(updateMovie).delete(deleteMovie);
router.route('/:movieId/actors').get(getAllActors).patch(addActorToMovie);

// /movies/movieId/actors
// router.use('/:movieId/actors');
