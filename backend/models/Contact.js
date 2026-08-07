import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  serviceType: {
    type: String,
    enum: ['bridal', 'party', 'hd', 'airbrush', 'hair', 'reception', 'editorial', 'other'],
    default: 'other'
  },
  message: {
    type: String,
    required: true,
    minlength: 10
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'completed'],
    default: 'new'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

export default mongoose.model('Contact', contactSchema);
