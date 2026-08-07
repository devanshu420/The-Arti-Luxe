import express from "express";
import sendMessageModel from "../models/SendMessage.js";
import sendInquiryEmail from "../config/mailer.js";

const router = express.Router();

// POST /api/contact
router.post("/contact", async (req, res) => {
  const { name, email, phone, serviceType, message } = req.body;

  // Validation
  if (!name || !email || !phone || !message) {
    return res.status(400).json({
      message: "Please fill in all required fields (Name, Email, Phone, Message).",
    });
  }

  try {
    // 1. Save entry to MongoDB database
    const newInquiry = new sendMessageModel({
      name,
      email,
      phone,
      serviceType: serviceType || "other",
      message,
    });
    await newInquiry.save();

    // 2. Dispatch email notification via Nodemailer
    await sendInquiryEmail({ name, email, phone, serviceType, message });

    return res.status(200).json({
      success: true,
      message: "Your inquiry has been submitted and sent successfully!",
    });
  } catch (error) {
    console.error("Error processing contact inquiry:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send inquiry. Please try again or reach out on WhatsApp.",
    });
  }
});

export default router;