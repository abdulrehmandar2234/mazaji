import { faqService } from '../services';

import catchAsync from '../utils/catchAsync';

/**
 * @desc      Add New Faq
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @property  { Object } req.body - Body object data
 * @returns   { JSON } - A JSON object representing the type, message and faq data
 */
export const addfaq = catchAsync(async (req, res) => {
  const { type, message, statusCode, faq } = await faqService.addfaq(req.body);

  if (type === 'Error') {
    return res.status(statusCode).json({
      type,
      message: req.polyglot.t(message)
    });
  }

  return res.status(statusCode).json({
    type,
    message: req.polyglot.t(message),
    faq
  });
});

/**
 * @desc      Get All Faq
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @returns   { JSON } - A JSON object representing the type, message and faq data
 */
export const getAllfaq = catchAsync(async (req, res) => {
  const { type, message, statusCode, faqs } = await faqService.getAllfaq();

  if (type === 'Error') {
    return res.status(statusCode).json({
      type,
      message: req.polyglot.t(message)
    });
  }

  return res.status(statusCode).json({
    type,
    message: req.polyglot.t(message),
    faqs
  });
});

/**
 * @desc      Get Faq
 * @param     { Object } req - Request object
 * @param     { String } req.params.id - FaqId
 * @param     { Object } res - Response object
 * @returns   { JSON } - A JSON object representing the type, message and faq data
 */
export const getfaq = catchAsync(async (req, res) => {
  const { type, message, statusCode, faq } = await faqService.getfaq(
    req.params.id
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
    faq
  });
});

/**
 * @desc      Delete Faq
 * @param     { Object } req - Request object
 * @param     { String } req.params.id - FaqId
 * @param     { Object } res - Response object
 * @returns   { JSON } - A JSON object representing the type, message and faq data
 */
export const deletefaq = catchAsync(async (req, res) => {
  const { type, message, statusCode } = await faqService.deletefaq(
    req.params.id
  );

  if (type === 'Error') {
    return res.status(statusCode).json({
      type,
      message: req.polyglot.t(message)
    });
  }

  return res.status(statusCode).json({
    type,
    message: req.polyglot.t(message)
  });
});

/**
 * @desc      Update Faq
 * @param     { Object } req - Request object
 * @param     { String } req.params.id - FaqId
 * @property  { Object } req.body - Body object data
 * @param     { Object } res - Response object
 * @returns   { JSON } - A JSON object representing the type, message and faq data
 */
export const updatefaq = catchAsync(async (req, res) => {
  const { type, message, statusCode, faq } = await faqService.updatefaq(
    req.params.id,
    req.body
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
    faq
  });
});
