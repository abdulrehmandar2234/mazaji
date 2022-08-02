import mongoose from 'mongoose';

import toJSON from './plugins/index';

const faqsSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "Please Enter faq's question"]
    },
    answer: {
      type: String,
      required: [true, "Please Enter faq's answer"]
    }
  },
  { timestamps: true }
);

faqsSchema.plugin(toJSON);

const Faqs = mongoose.model('faq', faqsSchema);

export default Faqs;
