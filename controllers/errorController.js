import AppError from './../util/appError.js';

const sendDevError = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
    stack: err.stack,
  });
};

const sendProdError = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }
  if (!err.isOperational) {
    res.status(500).json({
      status: 'Error',
      message: 'Something went wrong',
    });
  }
};

const handleValidationError = (err) => {
  console.log('Handling Validation Error');
  const errors = Object.values(err.errors).map((er) => er.message);
  const message = `Your request encountered the following errors: ${errors.join(
    ', '
  )}`;
  console.log('handled');
  return new AppError(message, 400);
};

const handleDuplicateFieldError = (err) => {
  const [errorField, errorValue] = Object.entries(err.keyValue).flat();
  const message = `You're trying to enter a duplicate with ${errorField}: ${errorValue}`;
  return new AppError(message, 400);
};

export default (err, req, res, next) => {
  let error = err;
  error.statusCode = error.statusCode || 500;
  error.status = error.status || 'Error';
  if (process.env.NODE_ENV === 'development') sendDevError(error, res);
  if (process.env.NODE_ENV === 'production') {
    if (error.name === 'ValidationError') error = handleValidationError(error);
    if (error.code === 11000) error = handleDuplicateFieldError(error);
    sendProdError(error, res);
  }
};
