import {Review} from './../models/reviewSchema.js';

import {createOne, getOne, getAll, updateOne, deleteOne} from './handlerFactory.js';

export const createReview = createOne(Review);
export const getReview = getOne(Review);
export const getAllReviews = getAll(Review);
export const updateReview = updateOne(Review);
export const deleteReview = deleteOne(Review);
