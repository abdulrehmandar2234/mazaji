import catchAsync from '../utils/catchAsync';

import { GenreService } from '../services';

/**
 * @desc      Add New Genre
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @property  { Object } req.body - Body object data
 * @returns   { JSON } - A JSON object representing the type, message and genre data
 */
export const createGenre = catchAsync(async (req, res) => {
  // 1) Create new genre
  const { type, message, statusCode, genre } = await GenreService.createGenre(
    req.body
  );

  // 2) Check if there is an error
  if (type === 'Error') {
    return res.status(statusCode).json({
      type,
      message: req.polyglot.t(message)
    });
  }

  // 3) If everything is OK, send data
  return res.status(statusCode).json({
    type,
    message: req.polyglot.t(message),
    genre
  });
});

/**
 * @desc      Get Genre
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @property  { String } req.params.id - GenreId
 * @returns   { JSON } - A JSON object representing the type, message and genre data
 */
export const getGenre = catchAsync(async (req, res) => {
  // 1) get genre by id
  const { type, message, statusCode, genre } = await GenreService.getGenre(
    req.params.id
  );

  // 2) Check if there is an error
  if (type === 'Error') {
    return res.status(statusCode).json({
      type,
      message: req.polyglot.t(message)
    });
  }

  // 3) If everything is OK, send data
  return res.status(statusCode).json({
    type,
    message: req.polyglot.t(message),
    genre
  });
});

/**
 * @desc      Get All Genre
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @returns   { JSON } - A JSON object representing the type, message and genre data
 */
export const getAllGenre = catchAsync(async (req, res) => {
  // 1) get all genre
  const { type, message, statusCode, genre } = await GenreService.getAllGenre();

  // 2) Check if there is an error
  if (type === 'Error') {
    return res.status(statusCode).json({
      type,
      message: req.polyglot.t(message)
    });
  }

  // 3) If everything is OK, send data
  return res.status(statusCode).json({
    type,
    message: req.polyglot.t(message),
    genre
  });
});

/**
 * @desc      Delete Genre
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @param     { String } req.params.id - GenreId
 * @returns   { JSON } - A JSON object representing the type, message and genre data
 */
export const deleteGenre = catchAsync(async (req, res) => {
  // 1) delete genre
  const { type, message, statusCode } = await GenreService.deleteGenre(
    req.params.id
  );

  // 2) Check if there is an error
  if (type === 'Error') {
    return res.status(statusCode).json({
      type,
      message: req.polyglot.t(message)
    });
  }

  // 3) If everything is OK, send data
  return res.status(statusCode).json({
    type,
    message: req.polyglot.t(message)
  });
});

/**
 * @desc      Update Genre
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @param     { Object } req.body - Body object data
 * @param     { String } req.params.id - GenreId
 * @returns   { JSON } - A JSON object representing the type, message and genre data
 */
export const updateGenre = catchAsync(async (req, res) => {
  // 1) update genre
  const { type, message, statusCode } = await GenreService.updateGenre(
    req.params.id,
    req.body
  );

  // 2) Check if there is an error
  if (type === 'Error') {
    return res.status(statusCode).json({
      type,
      message: req.polyglot.t(message)
    });
  }

  // 3) If everything is OK, send data
  return res.status(statusCode).json({
    type,
    message: req.polyglot.t(message)
  });
});
