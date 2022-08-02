import catchAsync from '../utils/catchAsync';

import Faqs from '../models';

/**
 * @docs    Add New FAQ
 * @param   { Object } body - Body object data
 * @returns { Object<type|message|statusCode|faq> }
 */
export const addfaq = catchAsync(async (body) => {
  const { question, answer } = body;

  if (!question || !answer) {
    return {
      type: 'Error',
      message: 'fieldsRequired',
      statusCode: 400
    };
  }

  let faq = await Faqs.create({ question: question, answer: answer });
  return {
    type: 'Success',
    message: 'successfullCreated',
    statusCode: 201,
    faq
  };
});

/**
 * @docs    Update FAQ using It's ID
 * @param   { String } id - FAQ ID
 * @param   { Object } body - Body object data
 * @returns { Object<type|message|statusCode|faq> }
 */
export const updatefaq = catchAsync(async (id, body) => {
  if (!id) {
    return {
      type: 'Error',
      message: 'fieldsRequired',
      statusCode: 400
    };
  }

  let faq = await Faqs.updateOne({ _id: id }, body, { new: true });
  return {
    type: 'Success',
    message: 'successfulUpdated',
    statusCode: 200,
    faq
  };
});

/**
 * @desc    Query FAQS
 * @returns { Object<type|message|statusCode|faqs> }
 */
export const getAllfaq = catchAsync(async () => {
  let faqs = await Faqs.find();
  return {
    type: 'Success',
    message: 'successfulFound',
    statusCode: 200,
    faqs
  };
});

/**
 * @desc    Query FAQ Using It's ID
 * @param   { Object } id - FAQ ID
 * @return  { Object<type|message|statusCode|faq> }
 */
export const getfaq = catchAsync(async (id) => {
  if (!id) {
    return {
      type: 'Error',
      message: 'fieldsRequired',
      statusCode: 400
    };
  }

  let faq = await Faqs.findOne({ _id: id });
  return {
    type: 'Success',
    message: 'successfulFound',
    statusCode: 200,
    faq
  };
});

/**
 * @desc    Delete FAQ Using It's ID
 * @param   { String } id - FAQ ID,
 * @returns { Object<type|message|statusCode> }
 */
export const deletefaq = catchAsync(async (id) => {
  if (!id) {
    return {
      type: 'Error',
      message: 'fieldsRequired',
      statusCode: 400
    };
  }

  await Faqs.deleteOne({ _id: id });
  return {
    type: 'Success',
    message: 'successfulDeleted',
    statusCode: 200
  };
});
