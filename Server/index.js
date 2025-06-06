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
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #ffffff; border-radius: 8px;">
        <h2 style="color: #6b21a8;">Hi ${name},</h2>
        <p style="font-size: 16px; color: #333;">
          Thank you for registering with <strong>Cybknow Academy</strong>! Below are your registration details:
        </p>

        <ul style="font-size: 15px; color: #444;">
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Password:</strong> ${password}</li>
          <li><strong>Qualification:</strong> ${qualification}</li>
          <li><strong>Program:</strong> ${program}</li>
        </ul>

        <p style="margin-top: 20px;">If you have any questions, feel free to reply to this email.</p>

        <hr style="margin: 30px 0;" />

        <p style="font-size: 14px; color: #666;">
          Regards,<br />
          <strong>Cybknow Team</strong><br />
          <span>Email: ${process.env.EMAIL_USER}</span>
        </p>
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

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
