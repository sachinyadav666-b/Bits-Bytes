import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";

export const submitContactForm = async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    if (!name || !email || !phone || !service || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    // 1️⃣ Save Lead in MongoDB
    await Contact.create({ name, email, phone, service, message });

    // 2️⃣ Send Email Notification (Admin Notification)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: process.env.EMAIL,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Lead</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    });

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully!"
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};
