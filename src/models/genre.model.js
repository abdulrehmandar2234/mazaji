import mongoose from 'mongoose';

import toJSON from './plugins/index';

const genreSchema = mongoose.Schema(
  {
    genrename: {
      type: String,
      required: [true, 'Please add gener']
    }
  },
  {
    timestamps: true
  }
);

// add plugin that converts mongoose to json
genreSchema.plugin(toJSON);

const Genre = mongoose.model('genre', genreSchema);

export default Genre;
