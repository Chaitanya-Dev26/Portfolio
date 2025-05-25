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
    text: `You have received a new message from your website contact form.\n\n` +
          `Name: ${name}\n` +
          `Email: ${email}\n\n` +
          `Message:\n${message}\n\n` +
          `---\n` +
          `This email was sent from your website contact form.`,
    replyTo: email,  // This sets the reply address to user’s email
  };
  

  await transporter.sendMail(mailOptions);
}

module.exports = { sendMail };
