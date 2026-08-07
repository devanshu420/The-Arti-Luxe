import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  description: {
    type: String,
    required: true
  },
  longDescription: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: null
  },
  image: {
    type: String,
    default: null
  },
  packages: [{
    name: String,
    price: Number,
    features: [String]
  }],
  faqs: [{
    question: String,
    answer: String
  }],
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

export default mongoose.model('Service', serviceSchema);
