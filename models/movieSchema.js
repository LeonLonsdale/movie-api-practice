import mongoose from 'mongoose';

/* TODO
producer: reference ID
actors: reference ID
*/

const movieSchema = new mongoose.Schema({
  title: {
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
});

movieSchema.index({title: 1, releaseYear: 1}, {unique: true});

export const Movie = mongoose.model('Movie', movieSchema);
