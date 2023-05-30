import dotenv from "dotenv";
import { convert_next } from "../services/JWT.js";
dotenv.config();

const login_admin = (req, res, next) => {
  if (
    req.body.user_name == process.env.DB_ADMIN &&
    req.body.user_password == process.env.DB_ADMIN_PASSWORD
  ) {
    let text = convert_next(process.env.COOKIE_ADMIN);
    text = text.toString();
    res.send(text);
  } else {
    next("Account does not exist");
  }
};

export { login_admin };
