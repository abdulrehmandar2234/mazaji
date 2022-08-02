// Utils
import catchAsync from '../utils/catchAsync';

// Models
import { Genre } from '../models/index';

/**
 * @docs    Create New Genre
 * @param   { Object } body - Body object data
 * @returns { Object<type|message|statusCode|genre> }
 */
export const createGenre = catchAsync(async (body) => {
  const { genrename } = body;

  if (!genrename) {
    return {
      type: 'Error',
      message: 'fieldsRequired',
      statusCode: 400
    };
  }

  const genre = await Genre.create({
    genrename: genrename
  });

  return {
    type: 'Success',
    message: 'successfullCreated',
    statusCode: 201,
    genre
  };
});

/**
 * @desc    Query Genre Using It's ID
 * @param   { Object } id - Genre ID
 * @return  { Object<type|message|statusCode|genre> }
 */
export const getGenre = catchAsync(async (id) => {
  const genre = await Genre.findOne({ _id: id });

  return {
    type: 'Success',
    message: 'successfulFound',
    statusCode: 200,
    genre
  };
});

/**
 * @desc    Query Genres
 * @returns { Object<type|message|statusCode|genre> }
 */
export const getAllGenre = catchAsync(async () => {
  const genre = await Genre.find();

  return {
    type: 'Success',
    message: 'successfulFound',
    statusCode: 200,
    genre
  };
});

/**
 * @desc    Delete Genre Using It's ID
 * @param   { String } id - Genre ID,
 * @returns { Object<type|message|statusCode> }
 */
export const deleteGenre = catchAsync(async (id) => {
  await Genre.deleteOne({ _id: id });

  return {
    type: 'Success',
    message: 'successfulDeleted',
    statusCode: 200
  };
});

/**
 * @docs    Update Genre using It's ID
 * @param   { String } id - Genre ID
 * @param   { Object } body - Body object data
 * @returns { Object<type|message|statusCode> }
 */
export const updateGenre = catchAsync(async (id, body) => {
  await Genre.updateOne({ _id: id }, body);

  return {
    type: 'Success',
    message: 'successfulUpdated',
    statusCode: 200
  };
});
