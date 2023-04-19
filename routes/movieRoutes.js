import express from 'express';
import {createMovie, getAllMovies, updateMovie} from './../controllers/movieController.js';

export const router = express.Router();

router.route('/').post(createMovie).get(getAllMovies);
router.route('/:id').patch(updateMovie);
