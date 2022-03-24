import { getDomainLocale } from "next/dist/shared/lib/router/router";

export default function (req, res) {
  require("dotenv").config();

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "theadmissionportal01@gmail.com",
      pass: "wereru123",
    },
    secure: true,
  });

  const mailData = {
    from: "theadmissionportal01@gmail.com",
    to: "officialksacheen@gmail.com",
    subject: `Message From ${req.body.fullname}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>"File link:"${req.body.file}</div><p>Sent from: ${req.body.email}</p>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  console.log(req.body);
  res.send("success");
}
