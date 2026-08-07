import express from 'express';
import Service from '../models/Service.js';
import CourseClass from '../models/CourseClass.js';
import Testimonial from '../models/Testimonial.js';
import Gallery from '../models/Gallery.js';

const router = express.Router();

// SERVICES
router.get('/services', async (req, res) => {
  try {
    const services = await Service.find({ isActive: true });
    res.json({
      success: true,
      count: services.length,
      data: services
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching services',
      error: error.message
    });
  }
});

router.get('/services/:slug', async (req, res) => {
  try {
    const service = await Service.findOne({ slug: req.params.slug, isActive: true });
    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found'
      });
    }
    res.json({
      success: true,
      data: service
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching service',
      error: error.message
    });
  }
});

// CLASSES
router.get('/classes', async (req, res) => {
  try {
    const classes = await CourseClass.find({ isActive: true });
    res.json({
      success: true,
      count: classes.length,
      data: classes
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching classes',
      error: error.message
    });
  }
});

router.get('/classes/:slug', async (req, res) => {
  try {
    const courseClass = await CourseClass.findOne({ slug: req.params.slug, isActive: true });
    if (!courseClass) {
      return res.status(404).json({
        success: false,
        message: 'Class not found'
      });
    }
    res.json({
      success: true,
      data: courseClass
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching class',
      error: error.message
    });
  }
});

// TESTIMONIALS
router.get('/testimonials', async (req, res) => {
  try {
    const testimonials = await Testimonial.find({ isActive: true }).sort({ createdAt: -1 });
    res.json({
      success: true,
      count: testimonials.length,
      data: testimonials
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching testimonials',
      error: error.message
    });
  }
});

// GALLERY
router.get('/gallery', async (req, res) => {
  try {
    const { category } = req.query;
    const filter = { isActive: true };
    if (category) {
      filter.category = category;
    }
    const gallery = await Gallery.find(filter).sort({ createdAt: -1 });
    res.json({
      success: true,
      count: gallery.length,
      data: gallery
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching gallery',
      error: error.message
    });
  }
});

export default router;
