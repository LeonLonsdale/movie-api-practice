import { User } from './../models/userSchema.js';
import {
  createOne,
  getOne,
  getAll,
  updateOne,
  deleteOne,
} from './handlerFactory.js';

export const createUser = createOne(User);
export const getUser = getOne(User);
export const getAllUsers = getAll(User);
export const updateUser = updateOne(User);
export const deleteUser = deleteOne(User);
