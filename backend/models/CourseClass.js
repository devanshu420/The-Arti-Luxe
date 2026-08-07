import mongoose from 'mongoose';

const courseClassSchema = new mongoose.Schema({
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
  syllabus: {
    type: String,
    default: ''
  },
  duration: {
    type: String,
    default: '6 weeks'
  },
  fees: {
    type: Number,
    required: true
  },
  batchTimings: [String],
  eligibility: {
    type: String,
    default: 'Open to all'
  },
  certification: {
    type: Boolean,
    default: true
  },
  image: {
    type: String,
    default: null
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

export default mongoose.model('CourseClass', courseClassSchema);
