const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendMail(name, email, message) {
  const mailOptions = {
    from: process.env.EMAIL_USER,  // Your Gmail authenticated email
    to: process.env.EMAIL_RECEIVER, // Where you want to receive messages
    subject: `New contact from ${name}`,
    text: `Message: ${message}\n\nFrom: ${name} <${email}>`, // Include user info
    replyTo: email,  // This sets the reply address to user’s email
  };
  

  await transporter.sendMail(mailOptions);
}

module.exports = { sendMail };
