import express from 'express';

import {
  createReview,
  getReview,
  getAllReviews,
  updateReview,
  deleteReview,
} from './../controllers/reviewController.js';

export const router = express.Router();

router.route('/').post(createReview).get(getAllReviews);
router.route('/:id').get(getReview).patch(updateReview).delete(deleteReview);
