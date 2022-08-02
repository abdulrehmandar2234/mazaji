// Utils
import catchAsync from '../utils/catchAsync';
import { uploadFile, destroyFile, uploadVideo } from '../utils/cloudinary';
import dataUri from '../utils/datauri';
// Models
import { Ads, User } from '../models/index';

/**
 * @docs    Add New Ads
 * @param   { Object } body - Body object data
 * @param   { Object } thumbnail - Ads thumbnail
 * @param   { Object } file - Ads video
 * @returns { Object<type|message|statusCode|Ad> }
 */
export const addAds = catchAsync(async (data, file, thumbnail) => {
  const { adDuration, pointsPerWatch, name } = data;

  if (thumbnail === undefined) {
    return {
      type: 'Error',
      message: 'ImageRequired',
      statusCode: 400
    };
  }

  if (file === undefined) {
    return {
      type: 'Error',
      message: 'videoRequired',
      statusCode: 400
    };
  }

  if ((!adDuration, !pointsPerWatch)) {
    return {
      type: 'Error',
      message: 'fieldsRequired',
      statusCode: 400
    };
  }

  const adsFolderName = `Adsthumbnail/${name.trim().split(' ').join('')}`;

  const thumbnailImage = await uploadFile(
    dataUri(thumbnail).content,
    adsFolderName,
    600
  );

  const videoFolderName = `AdsVideos/${(name.trim().split(' ').join(''))}`;

  const video = await uploadVideo(
    dataUri(file, '.mp4').content,
    videoFolderName
  );

  const Ad = await Ads.create({
    name: name,
    adsFile: video.secure_url,
    adsFileId: video.public_id,
    thumbnail: thumbnailImage.secure_url,
    thumbnailId: thumbnailImage.public_id,
    adDuration: adDuration,
    pointsPerWatch: pointsPerWatch,
    status: true
  });

  return {
    type: 'Success',
    message: 'successfullCreated',
    statusCode: 201,
    Ad
  };
});

/**
 * @docs    Update Ads using It's ID
 * @param   { Object } data - Body object data
 * @param   { String } id - Ads ID
 * @returns { Object<type|message|statusCode|Ad> }
 */
export const updateAds = catchAsync(async (id, data) => {
  const Ad = await Ads.findOneAndUpdate({ _id: id }, data, { new: true });

  return {
    type: 'Success',
    message: 'successful',
    statusCode: 200,
    Ad
  };
});

/**
 * @desc    Query Ads
 * @return  { Object<type|message|statusCode|data> }
 */
export const getAds = catchAsync(async () => {
  const data = await Ads.find({ status: true });

  return {
    type: 'Success',
    message: 'successful',
    statusCode: 200,
    data
  };
});

/**
 * @desc    Delete Ads Using It's ID
 * @param   { String } id - Ads ID,
 * @returns { Object<type|message|statusCode> }
 */
export const deleteAds = catchAsync(async (id) => {
  let res = await Ads.findByIdAndDelete(id);

  if (!res) {
    return {
      type: 'Error',
      message: 'notExists',
      statusCode: 404
    };
  }

  destroyFile(res.thumbnailId);

  destroyFile(res.adsFileId);

  return {
    type: 'Success',
    message: 'successfulDeleted',
    statusCode: 200
  };
});

/**
 * @desc    Ads watched by Users
 * @param   { String } id - Ads ID,
 * @param   { String } userId - User ID, 
 * @param   { Object } data - Body data object, 
 * @returns { Object<type|message|statusCode> }
 */
export const watchads = catchAsync(async (id, userId, data) => {
  const { duration } = data;

  if (!duration) {
    return {
      type: 'Error',
      message: 'fieldsRequired',
      statusCode: 400
    };
  }

  const { adDuration, pointsPerWatch } = await Ads.findOne({ _id: id });

  if (adDuration == duration) {
    await Ads.updateOne(
      { _id: id },
      { $addToSet: { watchedby: userId } },
      { new: true }
    );

    await User.updateOne(
      { _id: userId },
      { $inc: { points: pointsPerWatch } },
      { new: true }
    );

    return {
      type: 'Success',
      message: 'successful',
      statusCode: 200
    };
  }

  return {
    type: 'Error',
    message: 'successful',
    statusCode: 200
  };
});

/**
 * @desc    Query Ads by Admin
 * @return  { Object<type|message|statusCode|data> }
 */
export const getAdsByAdmin = catchAsync(async () => {
  const data = await Ads.find().populate({ path: 'watchedby' });

  return {
    type: 'Success',
    message: 'successful',
    data,
    statusCode: 200
  };
});
