import nodemailer from "nodemailer";
import 'dotenv/config';

// Create Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, 
  },
});


// Helper function to send the inquiry email
const sendInquiryEmail = async ({ name, email, phone, serviceType, message }) => {
  const mailOptions = {
    from: `"Luxé Beauty Studio" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER, // Receives notification
    replyTo: email,
    subject: `✨ New Inquiry from ${name} - ${serviceType.toUpperCase()}`,
    html: `
      <div style="font-family: Arial, sans-serif; background-color: #050505; color: #ffffff; padding: 30px; border-radius: 12px; max-width: 600px; margin: auto; border: 1px solid #d4af37;">
        <h2 style="color: #d4af37; border-bottom: 1px solid #d4af37; padding-bottom: 10px; margin-top: 0;">
          ✨ Luxé Beauty Studio - New Client Inquiry
        </h2>
        <p style="font-size: 14px; color: #cccccc;">You have received a new inquiry through your website:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 10px 0; color: #d4af37; font-weight: bold; width: 35%;">Client Name:</td>
            <td style="padding: 10px 0; color: #ffffff;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #d4af37; font-weight: bold;">Email Address:</td>
            <td style="padding: 10px 0; color: #ffffff;">
              <a href="mailto:${email}" style="color: #ffffff; text-decoration: underline;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #d4af37; font-weight: bold;">Phone Number:</td>
            <td style="padding: 10px 0; color: #ffffff;">
              <a href="tel:${phone}" style="color: #ffffff; text-decoration: underline;">${phone}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #d4af37; font-weight: bold;">Makeup Category:</td>
            <td style="padding: 10px 0; color: #ffffff; text-transform: uppercase; font-weight: bold;">${serviceType}</td>
          </tr>
        </table>

        <div style="margin-top: 25px; padding: 15px; background-color: #111111; border-left: 3px solid #d4af37; border-radius: 4px;">
          <h4 style="color: #d4af37; margin: 0 0 8px 0; font-size: 13px; text-transform: uppercase;">Client Message:</h4>
          <p style="color: #dddddd; margin: 0; font-size: 14px; line-height: 1.6;">${message}</p>
        </div>

        <p style="font-size: 11px; color: #777777; margin-top: 30px; text-align: center;">
          Sent automatically from Luxé Beauty Studio Contact Form.
        </p>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
};

export default sendInquiryEmail ;