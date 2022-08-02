import catchAsync from '../utils/catchAsync';

import { eventService } from '../services';

/**
 * @desc      Add New Event
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @property  { Object } req.body - Body object data
 * @returns   { JSON } - A JSON object representing the type, message and event data
 */
export const createEvent = catchAsync(async (req, res) => {
  // 1) Create new event
  const { type, message, statusCode, event } = await eventService.createEvent(
    req.body,
    req.files
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
    event
  });
});

/**
 * @desc      Get Event
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @property  { String } req.params.id - EventId
 * @returns   { JSON } - A JSON object representing the type, message and event data
 */
export const getEvent = catchAsync(async (req, res) => {
  // 1) get event by id
  const { type, message, statusCode, event } = await eventService.getEvent(
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
    event
  });
});

/**
 * @desc      Get All Event
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @returns   { JSON } - A JSON object representing the type, message and event data
 */
export const getAllEvent = catchAsync(async (req, res) => {
  // 1) get all event
  const { type, message, statusCode, event } = await eventService.getAllEvent(
    req.query
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
    event
  });
});

/**
 * @desc      Delete Event
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @param     { String } req.params.id - EventId
 * @returns   { JSON } - A JSON object representing the type, message and event data
 */
export const deleteEvent = catchAsync(async (req, res) => {
  // 1) delete event
  const { type, message, statusCode } = await eventService.deleteEvent(
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
 * @desc      Update Event
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @param     { Object } req.body - Body object data
 * @param     { String } req.params.id - EventId
 * @returns   { JSON } - A JSON object representing the type, message and event data
 */
export const updateEvent = catchAsync(async (req, res) => {
  // 1) update event
  const { type, message, statusCode } = await eventService.updateEvent(
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

/**
 * @desc      Update Event Cover Image Controller
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @property  { String } req.params.eventId - Event ID
 * @property  { Object } req.files - Event cover image
 * @returns   { JSON } - A JSON object representing the type, message, and the event
 */
export const updateEventCoverImage = catchAsync(async (req, res) => {
  // 1) Update event cover image using it's ID
  const { type, message, statusCode, event } =
    await eventService.updateEventCoverImage(req.params.eventId, req.files);

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
    event
  });
});
