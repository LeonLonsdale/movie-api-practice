import {Movie} from './../models/movieSchema.js';
import {catchAsync} from './../util/catchAsync.js';
import {createOne, getAll, updateOne} from './handlerFactory.js';

export const createMovie = createOne(Movie);

export const getAllMovies = getAll(Movie);

export const updateMovie = updateOne(Movie);
