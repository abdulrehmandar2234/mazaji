import mongoose from 'mongoose';

import toJSON from './plugins/index';

const templateSchema = mongoose.Schema(
  {
    type: {
      type: String,
      required: [true, 'Please add type']
    },
    description: {
      type: String,
      required: [true, 'Please add description']
    }
  },
  {
    timestamps: true
  }
);

// add plugin that converts mongoose to json
templateSchema.plugin(toJSON);

const Template = mongoose.model('template', templateSchema);

export default Template;
