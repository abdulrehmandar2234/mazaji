// Utils
import catchAsync from '../utils/catchAsync';

import { adsService } from '../services';

/**
 * @desc      Add New Ads
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @property  { Object } req.body - Body object data
 * @property  { Object } req.files.video[0] - Video
 * @property  { Object } req.files.thumbnail[0] - Thumbnail
 * @returns   { JSON } - A JSON object representing the type, message and ads data
 */
export const addAds = catchAsync(async (req, res, next) => {
  const { type, message, statusCode, Ad } = await adsService.addAds(
    req.body,
    req.files.video[0],
    req.files.thumbnail[0]
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
    Ad
  });
});

/**
 * @desc      upddate Ads
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @property  { Object } req.body - Body object data
 * @param     { String } req.params.id - AdId
 * @returns   { JSON } - A JSON object representing the type, message and ads data
 */
export const updateAd = catchAsync(async (req, res, next) => {
  const { type, message, statusCode, Ad } = await adsService.updateAds(
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
    Ad
  });
});

/**
 * @desc      delete Ads
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @param     { String } req.params.id - AdId
 * @returns   { JSON } - A JSON object representing the type, message and ads data
 */
export const deleteAd = catchAsync(async (req, res, next) => {
  const { type, message, statusCode } = await adsService.deleteAds(
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
 * @desc      get all Ads
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @returns   { JSON } - A JSON object representing the type, message and ads data
 */
export const getAds = catchAsync(async (req, res, next) => {
  const { type, message, statusCode, data } = await adsService.getAds();

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
 * @desc      get Ads by Admin
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @returns   { JSON } - A JSON object representing the type, message and ads data
 */
export const getAdsByAdmin = catchAsync(async (req, res, next) => {
  const { type, message, statusCode, data } = await adsService.getAdsByAdmin();

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
 * @desc       Ads watchd by User
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @property  { Object } req.body - Body object data
 * @property  { String } req.user.id - UserId
 * @property  { String } req.params.id - VideoId
 * @returns   { JSON } - A JSON object representing the type, message and ads data
 */
export const watchedby = catchAsync(async (req, res, next) => {
  const { type, message, statusCode, data } = await adsService.watchads(
    req.params.id,
    req.user.id,
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
    data
  });
});
