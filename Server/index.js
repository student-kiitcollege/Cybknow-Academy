const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/api/register", async (req, res) => {
  const { name, email, phone, password, qualification, program } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Cybknow Academy" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Welcome to Cybknow Academy",
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2 style="color: #6b21a8;">Hi ${name},</h2>
        <p>Thank you for registering with <strong>Cybknow Academy</strong>!</p>
        <ul>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Password:</strong> ${password}</li>
          <li><strong>Qualification:</strong> ${qualification}</li>
          <li><strong>Program:</strong> ${program}</li>
        </ul>
        <p>Feel free to reply to this email with any questions.</p>
        <hr/>
        <p>Regards,<br/>Cybknow Team<br/>Email: ${process.env.EMAIL_USER}</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (err) {
    console.error("Email send error:", err);
    res.status(500).json({ success: false, message: "Email failed to send" });
  }
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_USER,
    subject: "New Contact Message from Cybknow Website",
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h3>New Message Received</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("❌ Contact message failed:", error);
    res.status(500).json({ success: false, message: "Failed to send message." });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
