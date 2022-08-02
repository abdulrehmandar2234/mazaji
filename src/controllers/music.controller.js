import catchAsync from '../utils/catchAsync';

import { musicService } from '../services';

/**
 * @desc      Add New Music
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @property  { Object } req.body - Body object data
 * @property  { Object } req.file - Music file
 * @returns   { JSON } - A JSON object representing the type, message and music data
 */
export const createMusic = catchAsync(async (req, res) => {
  const { type, message, statusCode, music } = await musicService.addMusic(
    req.body,
    req.file
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
    music
  });
});

/**
 * @desc      Get Music
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @param     { String } req.params.id - MusicId
 * @returns   { JSON } - A JSON object representing the type, message and music data
 */
export const getMusic = catchAsync(async (req, res) => {
  const { type, message, statusCode, music } = await musicService.getMusic(
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
    music
  });
});

/**
 * @desc      Get All Music
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @returns   { JSON } - A JSON object representing the type, message and music data
 */
export const getAllMusic = catchAsync(async (req, res) => {
  const { type, message, statusCode, music } = await musicService.getAllMusic();

  if (type === 'Error') {
    return res.status(statusCode).json({
      type,
      message: req.polyglot.t(message)
    });
  }

  return res.status(statusCode).json({
    type,
    message: req.polyglot.t(message),
    music
  });
});

/**
 * @desc      Delete Music
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @param     { String } req.params.id - MusicId
 * @returns   { JSON } - A JSON object representing the type, message and music data
 */
export const deleteMusic = catchAsync(async (req, res) => {
  const { type, message, statusCode } = await musicService.deleteMusic(
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

// export const updateGenre = catchAsync(async (req, res) => {

//     // 1) update genre
//     const { type, message, statusCode } = await GenreService.updateGenre(req.params.id, req.body);

//     // 2) Check if there is an error
//     if (type === 'Error') {
//         return res.status(statusCode).json({
//             type,
//             message: req.polyglot.t(message)
//         });
//     }

//     // 3) If everything is OK, send data
//     return res.status(statusCode).json({
//         type,
//         message: req.polyglot.t(message),
//     });

// });

/**
 * @desc      Vote Music
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @param     { String } req.params.id - MusicId
 * @param     { String } req.user.id - UserId
 * @returns   { JSON } - A JSON object representing the type, message and music data
 */
export const vote = catchAsync(async (req, res) => {
  const { type, message, statusCode, music } = await musicService.vote(
    req.params.id,
    req.user.id
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
    music
  });
});

/**
 * @desc      Song of the week
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @returns   { JSON } - A JSON object representing the type, message and music data
 */
export const songsOftheWeek = catchAsync(async (req, res) => {
  const { type, message, statusCode, music } =
    await musicService.songsOftheWeek();

  if (type === 'Error') {
    return res.status(statusCode).json({
      type,
      message: req.polyglot.t(message)
    });
  }

  return res.status(statusCode).json({
    type,
    message: req.polyglot.t(message),
    music
  });
});

/**
 * @desc      Song Comments
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @param     { Object } req.body - Body object data
 * @param     { String } req.user.id - UserId
 * @returns   { JSON } - A JSON object representing the type, message and music data
 */
export const songsComments = catchAsync(async (req, res) => {
  const { type, message, statusCode } = await musicService.songsComments(
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
    message: req.polyglot.t(message)
  });
});
