import mongoose from 'mongoose';

import toJSON from './plugins/index';

const eventSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add event name']
    },
    location: {
      type: String,
      required: [true, 'Please add event location']
    },
    date: {
      type: Date,
      required: [true, 'Please add event date']
    },
    time: {
      type: String,
      required: [true, 'Please add event time']
    },
    coverImage: {
      type: String,
      required: [true, 'A product must have a cover image']
    },
    coverImageId: String,
    url: {
      type: String,
      required: [true, 'Please add event page link']
    },
  },
  {
    timestamps: true
  }
);

// add plugin that converts mongoose to json
eventSchema.plugin(toJSON);

const Event = mongoose.model('event', eventSchema);

export default Event;
