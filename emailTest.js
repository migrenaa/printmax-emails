import * as nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

var transporter = nodemailer.createTransport({
  service: process.env.SMTP_SERVER,
  port: process.env.SMTP_PORT,
  secure: false,
  ignoreTLS: true,
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.SENDER_PASSWORD,
  },
});

const html = `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
    <h1>this is a test</h1>
  </html>`;

var mailOptions = {
  from: process.env.SENDER_EMAIL,
  cc: "store@printmax.bg",
  to: "mimonova13@gmail.com",
  subject: "This is a test",
  html: html,
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
