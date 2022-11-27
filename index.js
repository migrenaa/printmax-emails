import * as nodemailer from "nodemailer";
import dotenv from "dotenv";
import { generateEmailContent } from "./emailGenerator.js";
import fs from "fs";
import { parse } from "csv-parse/sync";

dotenv.config();

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.SENDER_PASSWORD,
  },
});

const file = fs.readFileSync("./spisak.csv").toString();

const records = parse(file, {
  columns: true,
  skip_empty_lines: true,
});

records.forEach((record) => {
  const html = generateEmailContent(
    record.Company,
    record.Person,
    record.Link1,
    record.Name1,
    record.Link2,
    record.Name2,
    record.Picture
  );

  var mailOptions = {
    from: process.env.SENDER_EMAIL,
    cc: 'store@printmax.bg',
    to: record.Email,
    subject: record.Name1,
    html: html,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});
