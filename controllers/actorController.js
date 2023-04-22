import { catchAsync } from './../util/catchAsync.js';
import AppError from './../util/appError.js';
import { Actor } from './../models/actorSchema.js';
import { Movie } from './../models/movieSchema.js';
import {
  createOne,
  getOne,
  getAll,
  updateOne,
  deleteOne,
} from './handlerFactory.js';

export const createActor = createOne(Actor);
export const getActor = getOne(Actor);
export const getAllActors = getAll(Actor);
export const updateActor = updateOne(Actor);
export const deleteActor = deleteOne(Actor);

// /actors/:actorId/movies
export const addMovieToActor = catchAsync(async (req, res, next) => {
  const actor = await Actor.findById(req.params.actorId);

  if (!actor) return next(new AppError('Actor not found', 404));

  let movie;
  if (!req.body.movieName && !req.body.movieId)
    return next(new AppError('You must provide a movie name or ID', 404));

  if (req.body.movieName && !req.body.movieId) {
    movie = await Movie.findOne({ title: req.body.movieName });
  }

  if (req.body.movieId) {
    movie = await Movie.findById(req.body.movieId);
  }

  if (!movie) return next(new AppError('Unable to find that movie', 404));

  actor.roles.push(movie._id);
  movie.actors.push(actor._id);

  actor.save();
  movie.save();

  res.status(200).json({
    status: 'success',
    data: {
      actor,
    },
  });
});
