// Utils
import catchAsync from '../utils/catchAsync';
import dataUri from '../utils/datauri';
import { uploadFile, destroyFile } from '../utils/cloudinary';
// Models
import { Event } from '../models/index';

/**
 * @docs    Create New Event
 * @param   { Object } body - Body object data
 * @param   { Object } file - Event cover image
 * @returns { Object<type|message|statusCode|event> }
 */
export const createEvent = catchAsync(async (body, files) => {
  const { name, location, date, time, url } = body;
  const coverImage = files;
  if (!name || !location || !date || !time || !url || coverImage.length === 0) {
    return {
      type: 'Error',
      message: 'fieldsRequired',
      statusCode: 400
    };
  }

  const folderName = `Events/${name.trim().split(' ').join('')}`;

  const imageResult = await uploadFile(
    dataUri(coverImage[0]).content,
    folderName
  );

  const event = await Event.create({
    name,
    location,
    date,
    time,
    url,
    coverImage: imageResult.secure_url,
    coverImageId: imageResult.public_id
  });

  return {
    type: 'Success',
    message: 'successfullCreated',
    statusCode: 201,
    event
  };
});

/**
 * @desc    Query Event Using It's ID
 * @param   { Object } id - Event ID
 * @return  { Object<type|message|statusCode|event> }
 */
export const getEvent = catchAsync(async (id) => {
  const event = await Event.findOne({ _id: id });

  if (!event) {
    return {
      type: 'Error',
      message: 'noEventFound',
      statusCode: 404
    };
  }
  return {
    type: 'Success',
    message: 'successfulFound',
    statusCode: 200,
    event
  };
});

/**
 * @desc    Query Events
 * @returns { Object<type|message|statusCode|event> }
 */
export const getAllEvent = catchAsync(async (filter) => {
  let query = {};

  if (filter.location) {
    let regex = new RegExp(filter.location, 'i');
    query = { location: regex };
  }

  if (filter.date) {
    query.date = filter.date;
  }
  const event = await Event.find(query);

  if (!event) {
    return {
      type: 'Error',
      message: 'noEventsFound',
      statusCode: 404
    };
  }

  return {
    type: 'Success',
    message: 'successfulFound',
    statusCode: 200,
    event
  };
});

/**
 * @desc    Delete Event Using It's ID
 * @param   { String } id - Event ID,
 * @returns { Object<type|message|statusCode> }
 */
export const deleteEvent = catchAsync(async (id) => {
  await Event.deleteOne({ _id: id });

  return {
    type: 'Success',
    message: 'successfulDeleted',
    statusCode: 200
  };
});

/**
 * @docs    Update Event using It's ID
 * @param   { String } id - Event ID
 * @param   { Object } body - Body object data
 * @returns { Object<type|message|statusCode> }
 */
export const updateEvent = catchAsync(async (id, body) => {
  await Event.updateOne({ _id: id }, body);

  return {
    type: 'Success',
    message: 'successfulUpdated',
    statusCode: 200
  };
});

/**
 * @desc    Update Event Cover Image
 * @param   { String } eventId - Event ID
 * @param   { Object } image - Event cover image
 * @returns { Object<type|message|statusCode|event> }
 */
export const updateEventCoverImage = catchAsync(async (eventId, image) => {
  // 1) Check if image provided
  if (image.length === 0) {
    return {
      type: 'Error',
      message: 'selectImage',
      statusCode: 400
    };
  }

  const event = await Event.findById(eventId);

  // 2) Check if event doesn't exist
  if (!event) {
    return {
      type: 'Error',
      message: 'noEventFound',
      statusCode: 404
    };
  }

  let coverImage = image;

  const folderName = `Events/${event.name.trim().split(' ').join('')}`;
  const eventCoverImageID = event.coverImageId;

  // 4) Destroy Image
  destroyFile(eventCoverImageID);

  // 5) Upload image to cloudinary
  coverImage = await uploadFile(
    dataUri(coverImage[0]).content,
    folderName,
    600
  );

  const eventBody = {
    coverImage: coverImage.secure_url,
    coverImageId: coverImage.public_id
  };

  // 6) Update event using it's ID
  await Event.findByIdAndUpdate(eventId, eventBody, {
    new: true,
    runValidators: true
  });

  // 7) If everything is OK, send data
  return {
    type: 'Success',
    message: 'successfulUpdated',
    statusCode: 200
  };
});
