import express from 'express';
import { body, validationResult } from 'express-validator';
import Contact from '../models/Contact.js';

const router = express.Router();

// POST: Create new contact inquiry
router.post('/', [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').trim().notEmpty().withMessage('Phone is required'),
  body('message').trim().isLength({ min: 10 }).withMessage('Message must be at least 10 characters'),
  body('serviceType').optional().isIn(['bridal', 'party', 'hd', 'airbrush', 'hair', 'reception', 'editorial', 'other'])
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, serviceType, message } = req.body;

    const contact = new Contact({
      name,
      email,
      phone,
      serviceType: serviceType || 'other',
      message
    });

    const savedContact = await contact.save();
    res.status(201).json({
      success: true,
      message: 'Inquiry submitted successfully',
      data: savedContact
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error submitting inquiry',
      error: error.message
    });
  }
});

// GET: All contacts (admin only)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching contacts',
      error: error.message
    });
  }
});

// GET: Single contact by ID (admin only)
router.get('/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }
    res.json({
      success: true,
      data: contact
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching contact',
      error: error.message
    });
  }
});

export default router;
