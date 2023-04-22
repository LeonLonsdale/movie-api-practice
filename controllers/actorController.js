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
  manyToMany,
} from './handlerFactory.js';

export const createActor = createOne(Actor);
export const getActor = getOne(Actor);
export const getAllActors = getAll(Actor);
export const updateActor = updateOne(Actor);
export const deleteActor = deleteOne(Actor);
export const addMovieToActor = manyToMany(Actor, Movie);
