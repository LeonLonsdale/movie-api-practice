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
    let filter = {};
    if (req.params.actorId) filter = { actors: req.params.actorId };
    if (req.params.movieId) filter = { roles: req.params.movieId };
    const document = await Model.find(filter);

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

export const manyToMany = (ParentModel, ChildModel) =>
  catchAsync(async (req, res, next) => {
    const parentType = ParentModel.collection.collectionName.slice(0, -1);
    const childType = ChildModel.collection.collectionName.slice(0, -1);

    const parentDocument = await ParentModel.findById(req.params.id);

    if (!parentDocument)
      return next(new AppError(`Unable to find that ${parentType}`, 404));

    let childDocument;
    if (req.body.id) {
      childDocument = await ChildModel.findById(req.body.id);
    } else if (req.body.name) {
      childDocument = await ChildModel.findOne({ name: req.body.name });
    }

    if (!childDocument)
      return next(new AppError(`Unable to find that ${childType}`));

    parentDocument.roles.push(childDocument._id);
    childDocument.actors.push(parentDocument._id);

    await parentDocument.save();
    await childDocument.save();

    res.status(200).json({
      status: 'success',
      data: {
        parentDocument,
      },
    });
  });
