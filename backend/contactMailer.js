// Import required modules
const nodemailer = require('nodemailer');

// Create a nodemailer transporter using environment variables
const transporter = nodemailer.createTransport({
  service: 'gmail', // or any other email provider you are using
  auth: {
    user: process.env.EMAIL_USER, // Your email address from .env
    pass: process.env.EMAIL_PASS, // Your email password from .env
  },
});

// Create a function to send the email
const sendContactEmail = (req, res) => {
  const mailOptions = {
    from: req.body.email, // Person's email from the contact form
    to: process.env.EMAIL_USER, // Your email (the receiver)
    subject: 'New Contact Form Message', // Subject line
    text: `Name: ${req.body.name}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`, // Body content
  };

  // Send the email using nodemailer
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error sending email: ' + error.message);
    }
    return res.status(200).send('Message sent: ' + info.response);
  });
};

// Export the function
module.exports = sendContactEmail;
