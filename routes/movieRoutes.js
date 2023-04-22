import express from 'express';
import {
  createMovie,
  getAllMovies,
  getMovie,
  updateMovie,
  deleteMovie,
  addActorToMovie,
} from './../controllers/movieController.js';

export const router = express.Router();

router.route('/').post(createMovie).get(getAllMovies);
router.route('/:id').get(getMovie).patch(updateMovie).delete(deleteMovie);
router.route('/:id/actors').patch(addActorToMovie);

// /movies/movieId/actors
// router.use('/:movieId/actors');
