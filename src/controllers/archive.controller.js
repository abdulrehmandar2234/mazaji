import { archiveService } from '../services';

import catchAsync from '../utils/catchAsync';

/**
 * @desc      Create New Archive
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @property  { Object } req.body - Body object data
 * @property  { Object } req.file - Archive file
 * @returns   { JSON } - A JSON object representing the type, message and archive data
 */
export const createArchive = catchAsync(async (req, res) => {
  const { type, message, statusCode, data } =
    await archiveService.createArchive(req.body, req.file);

  if (type === 'Error') {
    return res.status(statusCode).json({
      type,
      message: req.polyglot.t(message)
    });
  }

  return res.status(statusCode).json({
    type,
    message: req.polyglot.t(message),
    data
  });
});

/**
 * @desc       Get Archive List
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @returns   { JSON } - A JSON object representing the type, message and archive data
 */
export const getListArchive = catchAsync(async (req, res) => {
  const { type, message, statusCode, data } =
    await archiveService.getListArchive();

  if (type === 'Error') {
    return res.status(statusCode).json({
      type,
      message: req.polyglot.t(message)
    });
  }

  return res.status(statusCode).json({
    type,
    message: req.polyglot.t(message),
    data
  });
});

/**
 * @desc       Get Archive Sub List
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @param     { String } req.params.id - Archive Id
 * @returns   { JSON } - A JSON object representing the type, message and archive data
 */
export const getSubListArchive = catchAsync(async (req, res) => {
  const { type, message, statusCode, data } =
    await archiveService.getSubListArchive(req.params.id);

  if (type === 'Error') {
    return res.status(statusCode).json({
      type,
      message: req.polyglot.t(message)
    });
  }

  return res.status(statusCode).json({
    type,
    message: req.polyglot.t(message),
    data
  });
});

/**
 * @desc      Add New Archive
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @property  { Object } req.body - Body object data
 * @property  { Object } req.file - Archive file
 * @property  { String } req.user._id - UserId
 * @returns   { JSON } - A JSON object representing the type, message and archive data
 */
export const addArchive = catchAsync(async (req, res) => {
  const { type, message, statusCode, data } = await archiveService.addArchive(
    req.body,
    req.file,
    req.user._id
  );

  if (type === 'Error') {
    return res.status(statusCode).json({
      type,
      message: req.polyglot.t(message)
    });
  }

  return res.status(statusCode).json({
    type,
    message: req.polyglot.t(message),
    data
  });
});

/**
 * @desc      get Archive
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @property  { String } req.user._id - UserId
 * @returns   { JSON } - A JSON object representing the type, message and archive data
 */
export const getArchive = catchAsync(async (req, res) => {
  const { type, message, statusCode, data } = await archiveService.getArchive(
    req.user._id
  );

  if (type === 'Error') {
    return res.status(statusCode).json({
      type,
      message: req.polyglot.t(message)
    });
  }

  return res.status(statusCode).json({
    type,
    message: req.polyglot.t(message),
    data
  });
});

/**
 * @desc      get Sub Archive
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @property  { String } req.params.id - ArchiveId
 * @property  { String } req.user._id - Request user object
 * @returns   { JSON } - A JSON object representing the type, message and archive data
 */
export const getSubArchive = catchAsync(async (req, res) => {
  const { type, message, statusCode, data } =
    await archiveService.getSubArchive(req.params.id, req.user._id);

  if (type === 'Error') {
    return res.status(statusCode).json({
      type,
      message: req.polyglot.t(message)
    });
  }

  return res.status(statusCode).json({
    type,
    message: req.polyglot.t(message),
    data
  });
});
