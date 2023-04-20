import {Actor} from './../models/actorSchema.js';
import {createOne, getOne, getAll, updateOne, deleteOne} from './handlerFactory.js';

export const createActor = createOne(Actor);
export const getActor = getOne(Actor);
export const getAllActors = getAll(Actor);
export const updateActor = updateOne(Actor);
export const deleteActor = deteleOne(Actor);
