const express = require('express');
const { PrismaClient } = require('@prisma/client');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Validation function
const validateReferralData = (data) => {
  const errors = [];
  if (!data.name) errors.push('Name is required');
  if (!data.email) errors.push('Email is required');
  if (!data.email.includes('@')) errors.push('Invalid email format');
  if (!data.referralCode) errors.push('Referral code is required');
  return errors;
};

// API to handle referral form data
app.post('/referrals', async (req, res) => {
  const { name, email, referralCode } = req.body;

  // Validate input
  const validationErrors = validateReferralData({ name, email, referralCode });
  if (validationErrors.length > 0) {
    return res.status(400).json({ errors: validationErrors });
  }

  try {
    const newReferral = await prisma.referral.create({
      data: { name, email, referralCode }
    });

    // Send referral email
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'Thank you for your referral!',
      text: `Hi ${name},\n\nThank you for referring someone using the code: ${referralCode}.\n\nBest regards,\nYour Company`
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json(newReferral);
  } catch (error) {
    console.error('Error processing referral:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Graceful shutdown
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});