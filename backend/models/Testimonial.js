import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema({
  clientName: {
    type: String,
    required: true,
    trim: true
  },
  clientImage: {
    type: String,
    default: null
  },
  serviceType: {
    type: String,
    enum: ['bridal', 'party', 'hd', 'airbrush', 'hair', 'reception', 'editorial'],
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  quote: {
    type: String,
    required: true,
    minlength: 20
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

export default mongoose.model('Testimonial', testimonialSchema);
