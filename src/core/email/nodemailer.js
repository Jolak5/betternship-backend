const nodemailer = require("nodemailer");
require("dotenv").config();

const SERVICE = process.env.NODEMAILER_SERVICE;
const USER = process.env.NODEMAILER_USER;
const KEY = process.env.NODEMAILER_PASS;
const BRAND = process.env.EMAIL_BRAND;

// *Initialize the nodemailer transport
const transporter = nodemailer.createTransport({
  service: SERVICE,
  auth: {
    user: USER,
    pass: KEY,
  },
});
// *The Send Email Function
const sendMail = async (
  destination = "",
  subject = "Betternship Inc.",
  html = ""
) => {
  const info = await transporter.sendMail({
    from: `${BRAND} <${USER}>`,
    to: destination,
    subject,
    html,
  });
  console.log("Email sent,", info.messageId);
};

module.exports = sendMail
// sendMail("calebchris000@gmail.com", "Welcome To Email OTP", "<b>Your EMAIL OTP is 402102</b>").catch((err) => console.log(err));
