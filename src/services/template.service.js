// Utils
import catchAsync from '../utils/catchAsync';

// Models
import { Template } from '../models/index';

/**
 * @docs    Create New Template
 * @param   { Object } body - Body object data
 * @returns { Object<type|message|statusCode|template> }
 */
export const createTemplate = catchAsync(async (body) => {
  const { type, description } = body;

  if (!type || !description) {
    return {
      type: 'Error',
      message: 'fieldsRequired',
      statusCode: 400
    };
  }

  const template = await Template.create({
    type,
    description
  });

  return {
    type: 'Success',
    message: 'successfullCreated',
    statusCode: 201,
    template
  };
});

/**
 * @desc    Query Template Using It's ID
 * @param   { Object } id - Template ID
 * @return  { Object<type|message|statusCode|template> }
 */
export const getTemplate = catchAsync(async (id) => {
  const template = await Template.findOne({ _id: id });
  if (!template) {
    return {
      type: 'Error',
      message: 'noTemplateFound',
      statusCode: 404
    };
  }

  return {
    type: 'Success',
    message: 'successfulFound',
    statusCode: 200,
    template
  };
});

/**
 * @desc    Query templates
 * @returns { Object<type|message|statusCode|template> }
 */
export const getAllTemplates = catchAsync(async () => {
  const template = await Template.find();
  if (!template.length > 0) {
    return {
      type: 'Error',
      message: 'noTemplatesFound',
      statusCode: 404
    };
  }

  return {
    type: 'Success',
    message: 'successfulFound',
    statusCode: 200,
    template
  };
});

/**
 * @desc    Delete template Using It's ID
 * @param   { String } id - template ID,
 * @returns { Object<type|message|statusCode> }
 */
export const deleteTemplate = catchAsync(async (id) => {
  await Template.deleteOne({ _id: id });

  return {
    type: 'Success',
    message: 'successfulDeleted',
    statusCode: 200
  };
});

/**
 * @docs    Update template using It's ID
 * @param   { String } id - template ID
 * @param   { Object } body - Body object data
 * @returns { Object<type|message|statusCode> }
 */
export const updateTemplate = catchAsync(async (id, body) => {
  await Template.updateOne({ _id: id }, body);

  return {
    type: 'Success',
    message: 'successfulUpdated',
    statusCode: 200
  };
});
