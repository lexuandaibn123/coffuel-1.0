import { send_mail_auto } from "../services/sendmail.js";

const send_email = (req, res) => {
  send_mail_auto(req.query.email);
  res.send("Thành công");
};

export { send_email };
