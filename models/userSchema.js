// import mongoose from 'mongoose';
import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'First name must be provided'],
  },
  surname: {
    type: String,
    required: [true, 'Surname must be provided'],
  },
  userName: {
    type: String,
    required: [true, 'A user must have a username'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'A user must have a password'],
  },
  email: {
    type: String,
    required: [true, 'You must provide an email address'],
  },
});

export const User = model('User', userSchema);
