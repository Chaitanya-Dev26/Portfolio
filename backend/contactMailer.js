const nodemailer = require('nodemailer');
require('dotenv').config();

// Setup transporter using Gmail and environment variables
const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS,
  },
});

// Send email with form data
async function sendMail(name, email, message) {
  const mailOptions = {
    from: process.env.EMAIL_USER,  // Sender address
    to: process.env.EMAIL_RECEIVER, // Receiver address
    subject: `New contact from ${name}`, // Email subject
    text: `You have received a new message from your website contact form.\n\n` +
          `Name: ${name}\n` +
          `Email: ${email}\n\n` +
          `Message:\n${message}\n\n` +
          `---\n` +
          `This email was sent from your website contact form.`,
    replyTo: email,  // This sets the reply address to user’s email
  };
  

  await transporter.sendMail(mailOptions); // Send the email
}

module.exports = { sendMail };
