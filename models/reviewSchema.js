import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  review: {
    type: String,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    required: [true, 'A rating is required'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export const Review = mongoose.model('Review', reviewSchema);
