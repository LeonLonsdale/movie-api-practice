import { catchAsync } from './../util/catchAsync.js';
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

export const getOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const document = await Model.findById(req.params.id);

    if (!document) return next(new AppError('No movie found for that ID', 404));

    res.status(200).json({
      status: 'success',
      data: {
        document,
      },
    });
  });

export const getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    const document = await Model.find();

    res.status(200).json({
      status: 'success',
      results: document.length,
      data: {
        document,
      },
    });
  });

export const updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const document = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!document)
      return next(new AppError('No document found with that ID', 404));

    res.status(200).json({
      status: 'success',
      data: {
        document,
      },
    });
  });

export const deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const document = await Model.findByIdAndDelete(req.params.id);

    if (!document)
      return next(new AppError('No document found with that ID', 404));

    res.status(204).json({
      status: 'success',
      data: {
        data: null,
      },
    });
  });
