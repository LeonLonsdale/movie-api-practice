import {catchAsync} from './../util/catchAsync.js';
import AppError from './../util/appError.js';

export const createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const document = await Model.create(req.body);

    res.status(200).json({
      status: 'success',
      data: {
        data: document,
      },
    });
  });

export const getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    const document = await Model.find();

    res.status(200).json({
      status: 'success',
      data: {
        document,
      },
    });
  });
