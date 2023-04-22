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

export const addMovieToActor = catchAsync(async (req, res, next) => {
  const actor = await Actor.findById(req.params.id);
  if (!actor) return next(new AppError('Actor not found.', 404));

  let movie;
  if (req.body.id) {
    movie = await Movie.findById(req.body.id);
  } else if (req.body.name) {
    movie = await Movie.findOne({ name: req.body.name });
  }
  if (!movie) return next(new AppError('Movie not found', 404));

  actor.movies.push(movie._id);
  movie.actors.push(actor._id);

  await actor.save();
  await movie.save();

  res.status(200).json({
    status: 'success',
    data: {
      actor,
    },
  });
});
