import mongoose from 'mongoose';

import toJSON from './plugins';

const musicSchema = mongoose.Schema(
  {
    musicFile: {
      type: String,
      required: [true, 'Please upload music']
    },
    musicFileId: {
      type: String,
      required: false
    },
    vote: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    voteCount: {
      type: Number,
      required: false,
      default: 0
    },
    genre: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'genre'
    },
    songName: {
      type: String,
      required: [true, 'Please tell us music name']
    },
    authorName: {
      type: String,
      required: [true, 'Please tell us music author name']
    },
    comments: {
      type: [
        {
          userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
          },
          message: String
        }
      ]
    }
  },
  {
    timestamps: true
  }
);

musicSchema.plugin(toJSON);

const Music = mongoose.model('Music', musicSchema);

export default Music;
