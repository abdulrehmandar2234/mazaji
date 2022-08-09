import catchAsync from '../utils/catchAsync';

import { templateService } from '../services';

/**
 * @desc      Add New template
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @property  { Object } req.body - Body object data
 * @returns   { JSON } - A JSON object representing the type, message and template data
 */
export const createTemplate = catchAsync(async (req, res) => {
  // 1) Create new template
  const { type, message, statusCode, template } =
    await templateService.createTemplate(req.body);

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
    template
  });
});

/**
 * @desc      Get template
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @property  { String } req.params.id - templateId
 * @returns   { JSON } - A JSON object representing the type, message and template data
 */
export const getTemplate = catchAsync(async (req, res) => {
  // 1) get template by id
  const { type, message, statusCode, template } =
    await templateService.getTemplate(req.params.id);

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
    template
  });
});

/**
 * @desc      Get All template
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @returns   { JSON } - A JSON object representing the type, message and template data
 */
export const getAllTemplates = catchAsync(async (req, res) => {
  // 1) get all template
  const { type, message, statusCode, template } =
    await templateService.getAllTemplates();

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
    template
  });
});

/**
 * @desc      Delete template
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @param     { String } req.params.id - templateId
 * @returns   { JSON } - A JSON object representing the type, message and template data
 */
export const deleteTemplate = catchAsync(async (req, res) => {
  // 1) delete template
  const { type, message, statusCode } = await templateService.deleteTemplate(
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
 * @desc      Update template
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @param     { Object } req.body - Body object data
 * @param     { String } req.params.id - templateId
 * @returns   { JSON } - A JSON object representing the type, message and template data
 */
export const updateTemplate = catchAsync(async (req, res) => {
  // 1) update template
  const { type, message, statusCode } = await templateService.updateTemplate(
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
