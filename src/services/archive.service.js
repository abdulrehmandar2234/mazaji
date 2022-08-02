import { Archive, ArchiveList } from '../models/index';
import catchAsync from '../utils/catchAsync';

import { uploadFile, destroyFile } from '../utils/cloudinary';
import dataUri from '../utils/datauri';

/**
 * @docs    Create New Archive
 * @param   { Object } body - Body object data
 * @param   { Object } file - Archive image
 * @returns { Object<type|message|statusCode|data> }
 */
export const createArchive = catchAsync(async (body, file) => {
  if (file === undefined) {
    return {
      type: 'Error',
      message: 'fieldsRequired',
      statusCode: 400
    };
  }

  const { name, type, isSub, parent } = body;

  if (!name || file.length === 0 || !type) {
    return {
      type: 'Error',
      message: 'fieldsRequired',
      statusCode: 400
    };
  }

  const folderName = `Archives/${name.trim().split(' ').join('')}`;

  const image = await uploadFile(dataUri(file).content, folderName, 600);

  const data = await ArchiveList.create({
    name,
    image: image.secure_url,
    imageId: image.public_id,
    onModel: type,
    parent: parent,
    isSub: isSub
  });

  return {
    type: 'Success',
    message: 'successfullCreated',
    statusCode: 201,
    data
  };
});

/**
 * @desc    Query Archives
 * @return  { Object<type|message|statusCode|data> }
 */
export const getListArchive = catchAsync(async () => {
  const data = await ArchiveList.find({ isSub: false }).populate('data');

  return {
    type: 'Success',
    message: 'successful',
    statusCode: 200,
    data
  };
});

/**
 * @desc    Query Sub Archives using parent id
 * @param   { String } parent - parent or Archieve ID
 * @return  { Object<type|message|statusCode|data> }
 */
export const getSubListArchive = catchAsync(async (parent) => {
  const data = await ArchiveList.find({
    $or: [{ parent: parent }, { _id: parent }]
  }).populate('data');

  return {
    type: 'Success',
    message: 'successful',
    statusCode: 200,
    data
  };
});

/**
 * @docs    Create New Sub Archive using User Id
 * @param   { Object } body - Body object data
 * @param   { Object } file - Archive image
 * @param   { String } id - User ID
 * @returns { Object<type|message|statusCode|data> }
 */
export const addArchive = catchAsync(async (body, file, id) => {
  const { name, type, isSub, parent, user_id } = body;

  if (file === undefined) {
    return {
      type: 'Error',
      message: 'fieldsRequired',
      statusCode: 400
    };
  }

  if (!name || file.length === 0 || !type) {
    return {
      type: 'Error',
      message: 'fieldsRequired',
      statusCode: 400
    };
  }

  const folderName = `UserArchives/${name.trim().split(' ').join('')}`;

  const image = await uploadFile(dataUri(file).content, folderName, 600);

  const data = await Archive.create({
    name,
    image: image.secure_url,
    imageId: image.public_id,
    onModel: type,
    parent: parent,
    isSub: isSub,
    user_id: id
  });

  return {
    type: 'Success',
    message: 'successfullCreated',
    statusCode: 201,
    data
  };
});

/**
 * @desc    Query Archives using User ID
 * @param   { String } id - User ID
 * @return  { Object<type|message|statusCode|data> }
 */
export const getArchive = catchAsync(async (id) => {
  const data = await Archive.find({ user_id: id, isSub: false }).populate(
    'data'
  );

  return {
    type: 'Success',
    message: 'successful',
    statusCode: 200,
    data
  };
});

/**
 * @desc    Query Archives using User ID or Parent ID
 * @param   { String } id - User ID
 * @param   { String } parent - parent ID
 * @return  { Object<type|message|statusCode|data> }
 */
export const getSubArchive = catchAsync(async (parent, id) => {
  const data = await Archive.find({
    $or: [{ user_id: id, parent: parent }, { _id: parent }]
  }).populate('data');

  return {
    type: 'Success',
    message: 'successful',
    statusCode: 200,
    data
  };
});
