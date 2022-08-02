import mongoose from 'mongoose';
import toJSON from './plugins/index';

const archiveSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'please add name of archive']
    },
    image: {
      type: String,
      required: [true, 'please select an image']
    },
    imageId: {
      type: String
    },
    isSub: {
      type: Boolean,
      required: true,
      default: false
    },
    parent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'archive',
      required: false,
      default: null
    },
    onModel: {
      type: String,
      required: true,
      enum: ['Music', 'Product']
    },
    data: [
      {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'onModel'
      }
    ],
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  { timestamps: true }
);

archiveSchema.plugin(toJSON);

const Archive = mongoose.model('archive', archiveSchema);

export default Archive;
