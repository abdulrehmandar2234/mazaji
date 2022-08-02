import moment from 'moment';
import { Music, ArchiveList } from '../models';

import catchAsync from '../utils/catchAsync';
import dataUri from '../utils/datauri';
import { uploadMusic, destroyFile } from '../utils/cloudinary';

import event from '../utils/eventEmitter';

/**
 * @docs    Add New Music
 * @param   { Object } body - Body object data
 * @param   { Object } file - Music file
 * @returns { Object<type|message|statusCode|music> }
 */
export const addMusic = catchAsync(async (body, file) => {
  const { songName, authorName, genre, archiveId } = body;
  if (!songName || !authorName || !genre || file.length == 0) {
    return {
      type: 'Error',
      message: 'fieldsRequired',
      statusCode: 400
    };
  }

  const folderName = `Musics/${songName.trim().split(' ').join('')}`;

  const musicfile = await uploadMusic(
    dataUri(file, '.mp3').content,
    folderName
  );

  const music = await Music.create({
    songName: songName,
    authorName: authorName,
    genre: genre,
    voteCount: 0,
    vote: [],
    musicFile: musicfile.secure_url,
    musicFileId: musicfile.public_id
  });

  await ArchiveList.findOneAndUpdate(
    { _id: archiveId },
    { $push: { data: music._id } }
  );

  return {
    type: 'Success',
    message: 'successfullCreated',
    statusCode: 201,
    music
  };
});

/**
 * @desc    Query Musics
 * @returns { Object<type|message|statusCode|music> }
 */
export const getAllMusic = catchAsync(async () => {
  const music = await Music.find().populate('genre').populate('vote');

  return {
    type: 'Success',
    message: 'successfulFound',
    statusCode: 200,
    music
  };
});

/**
 * @desc    Query Music Using It's ID
 * @param   { Object } id - Music ID
 * @return  { Object<type|message|statusCode|music> }
 */
export const getMusic = catchAsync(async (id) => {
  const music = await Music.findOne({ _id: id })
    .populate('genre')
    .populate('vote');

  return {
    type: 'Success',
    message: 'successfulFound',
    statusCode: 200,
    music
  };
});

/**
 * @desc    Delete Music Using It's ID
 * @param   { String } id - Music ID,
 * @returns { Object<type|message|statusCode> }
 */
export const deleteMusic = catchAsync(async (id) => {
  let musicId = await Music.findOne({ _id: id });

  destroyFile(musicId.musicFileId);

  await Music.deleteOne({ _id: id });

  return {
    type: 'Success',
    message: 'successfulDeleted',
    statusCode: 200
  };
});

/**
 * @desc    Vote Music Using It's ID and User ID
 * @param   { String } id - Music ID,
 * @param   { String } userid - User ID,
 * @returns { Object<type|message|statusCode|music> }
 */
export const vote = catchAsync(async (id, userid) => {
  if (!id) {
    return {
      type: 'Error',
      message: 'fieldsRequired',
      statusCode: 400
    };
  }

  let music;

  const exists = await Music.exists({ $and: [{ _id: id }, { vote: userid }] });

  if (exists) {
    music = await Music.findOneAndUpdate(
      { _id: id },
      {
        $inc: {
          voteCount: -1
        },
        $pull: {
          vote: userid
        }
      },
      { new: true }
    );
  } else {
    music = await Music.findOneAndUpdate(
      { _id: id },
      {
        $inc: {
          voteCount: 1
        },
        $push: {
          vote: userid
        }
      },
      { new: true }
    );
  }

  return {
    type: 'Success',
    message: 'successful',
    statusCode: 200,
    music
  };
});

/**
 * @desc    Query Song of the week
 * @returns { Object<type|message|statusCode|music> }
 */
export const songsOftheWeek = catchAsync(async () => {
  let music = await Music.find({
    createdAt: {
      $gte: moment().startOf('isoweek').toDate(),
      $lt: moment().endOf('isoweek').toDate()
    }
  })
    .populate('genre')
    .populate('vote');

  return {
    type: 'Success',
    message: 'successful',
    statusCode: 200,
    music
  };
});

/**
 * @desc    Query Song Comments Using User ID
 * @param   { String } id - User ID,
 * @param   { Object } date - contains message and musicId,
 * @returns { Object<type|message|statusCode> }
 */
export const songsComments = catchAsync(async (id, data) => {
  const { musicId, message } = data;

  const update = await Music.findOneAndUpdate(
    { _id: musicId },
    { $push: { comment: { userId: id, message: message } } },
    { new: true }
  );

  event.emit('message', update);

  return {
    type: 'Success',
    message: 'successful',
    statusCode: 200
  };
});
