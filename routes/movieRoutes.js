import express from 'express';
import {createMovie, getAllMovies} from './../controllers/movieController.js';

export const router = express.Router();

router.route('/').post(createMovie).get(getAllMovies);
