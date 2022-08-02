import mongoose from 'mongoose';
import toJSON from './plugins/index';

const adsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please Enter Ad name ']
    },
    adsFile: {
      type: String,
      required: [true, 'Please upload Ad']
    },
    adsFileId: {
      type: String,
      required: false
    },
    thumbnail: {
      type: String,
      required: false
    },
    thumbnailId: {
      type: String,
      required: false
    },
    watchedby: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    adDuration: {
      type: Number,
      required: false,
      default: 0
    },
    pointsPerWatch: {
      type: Number,
      required: true,
      default: 1
    },
    status: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  { timestamps: true }
);

adsSchema.plugin(toJSON);

const Ads = mongoose.model('ad', adsSchema);

export default Ads;
