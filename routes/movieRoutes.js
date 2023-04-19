import express from 'express';
import {
  createMovie,
  getAllMovies,
  getMovie,
  updateMovie,
  deleteMovie,
} from './../controllers/movieController.js';

export const router = express.Router();

router.route('/').post(createMovie).get(getAllMovies);
router.route('/:id').get(getMovie).patch(updateMovie).delete(deleteMovie);
