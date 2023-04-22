import mongoose from 'mongoose';

/* TODO
producer: reference ID
actors: reference ID
*/

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A movie title is required'],
  },
  releaseYear: {
    type: Number,
    required: [true, 'The movie release year is required'],
  },
  releaseDate: {
    type: Date,
  },
  storyline: {
    type: String,
  },
  certificate: {
    type: Number,
  },
  actors: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Actor',
    },
  ],
});

movieSchema.index({ name: 1, releaseYear: 1 }, { unique: true });

export const Movie = mongoose.model('Movie', movieSchema);
