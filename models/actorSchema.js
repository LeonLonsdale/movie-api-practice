import mongoose from 'mongoose';

const actorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'An actor must have a name'],
  },
  placeOfBirth: {
    type: String,
  },
  dateOfBirth: {
    type: Date,
    required: [true, 'An actor must have a date of birth'],
  },
});

movieSchema.index({name: 1, dateOfBirth: 1}, {unique: true});

export const Actor = mongoose.model('Actor', actorSchema);
