import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { getMail } from "./CRUDService.js";
dotenv.config();

const send_mail_auto = async (mail_user) => {
  let obj = await getMail();
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_ADMIN,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const mailOption = {
    from: process.env.MAIL_ADMIN,
    to: mail_user,
    subject: obj[0].subject,
    html: obj[0].mail,
  };

  transporter.sendMail(mailOption, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Send to ", mail_user);
    }
  });
};

export { send_mail_auto };
