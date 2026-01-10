import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { readFileSync } from "fs";

dotenv.config();

const app = express();

// ---------- MIDDLEWARE ----------
app.use(
  cors({
    origin: "http://localhost:5173", // your React app
  })
);

app.use(express.json());

// ---------- NODEMAILER ----------
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ---------- GOOGLE SHEETS ----------
const creds = JSON.parse(readFileSync("./credentials.json"));
const doc = new GoogleSpreadsheet(
  "10AKQXia3cZoYFqrkFDWqmHNyuuIaYVWobokPbdoI8_Y"
);

// =========== SAVE TO SHEET FUNCTION ===========
async function saveToSheet({ name, email, phone, message }) {
  await doc.useServiceAccountAuth(creds);
  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[0];

  // headers must be LOWERCASE
  await sheet.setHeaderRow(["name", "email", "phone", "message", "date"]);

  await sheet.addRow({
    name: name,
    email: email,
    phone: phone,
    message: message,
    date: new Date().toLocaleString(),
  });
}


// =========== MAIN ROUTE ===========
app.post("/send-mail", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Log to console to debug what is actually coming from the frontend
    console.log("Received Data:", { name, email, phone, message });

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    // 1. Send email
   await transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_USER,
  replyTo: email,
  subject: `📩 New Message from ${name}!`,

  html: `
  <div style="font-family:Segoe UI, Arial; padding:20px;">

    <h2>🎉 New Portfolio Contact</h2>

    <div style="border-radius:12px; padding:15px; border:2px dashed #a855f7;">
      <p>🧑 <strong>Name:</strong> ${name}</p>
      <p>📧 <strong>Email:</strong> ${email}</p>
      <p>📱 <strong>Phone:</strong> ${phone || "N/A"}</p>

      <p>💬 <strong>Message:</strong></p>
      <div style="background:#faf5ff; padding:12px; border-radius:8px;">
        ${message}
      </div>

      <p style="font-size:12px; color:#6b7280;">
        🕒 ${new Date().toLocaleString()}
      </p>
    </div>
  </div>
  `,
});

    // 2. Save to sheets
    await saveToSheet({ name, email, phone, message });

    res.json({
      success: true,
      message: "Message emailed and stored successfully 🚀",
    });
  } catch (err) {
    console.error("SERVER ERROR:", err);
    res.status(500).json({
      success: false,
      message: "Something went wrong ❌",
    });
  }
});

// ---------- START SERVER ----------
const PORT = 5000;
app.listen(PORT, () => console.log(`🔥 Server running on port ${PORT}`));