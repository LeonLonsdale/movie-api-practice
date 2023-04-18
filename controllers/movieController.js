import {Movie} from './../models/movieSchema.js';
import {catchAsync} from './../util/catchAsync.js';
import {createOne} from './handlerFactory.js';

export const createMovie = createOne(Movie);

export const getAllMovies = catchAsync(async (req, res, next) => {
  const movies = await Movie.find({});

  res.status(200).json({
    status: 'success',
    data: {
      movies,
    },
  });
});
