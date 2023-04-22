import { Movie } from './../models/movieSchema.js';
import { Actor } from './../models/actorSchema.js';
import { catchAsync } from './../util/catchAsync.js';
import AppError from './../util/appError.js';
import {
  createOne,
  getAll,
  getOne,
  updateOne,
  deleteOne,
} from './handlerFactory.js';

export const createMovie = createOne(Movie);
export const getAllMovies = getAll(Movie);
export const getMovie = getOne(Movie);
export const updateMovie = updateOne(Movie);
export const deleteMovie = deleteOne(Movie);

export const addActorToMovie = catchAsync(async (req, res, next) => {
  const movie = await Movie.findById(req.params.movieId);
  if (!movie) return next(new AppError('Movie not found.', 404));

  let actor;
  if (req.body.id) {
    actor = await Actor.findById(req.body.id);
  } else if (req.body.name) {
    actor = await Actor.findOne({ name: req.body.name });
  }
  if (!actor) return next(new AppError('Actor not found', 404));

  movie.actors.push(actor._id);
  actor.movies.push(movie._id);

  await movie.save();
  await actor.save();

  res.status(200).json({
    status: 'success',
    data: {
      movie,
    },
  });
});
