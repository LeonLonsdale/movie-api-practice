import { User } from './../models/userSchema.js';
import { catchAsync } from './../util/catchAsync.js';

export const signup = catchAsync(async (req, res, next) => {
  const user = await User.create({
    firstName: req.body.firstName,
    surname: req.body.surName,
    userName: req.body.userName,
    password: req.body.password,
    email: req.body.email,
  });
});
