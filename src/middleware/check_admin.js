import dotenv from "dotenv";
import { convert_back } from "../services/JWT.js";
dotenv.config();

const check_admin = async (req, res, next) => {
  let cookie = req.cookies.admin_techstart_coffuel;
  if (!cookie) {
    res.redirect("/admin");
  } else {
    let data = convert_back(cookie);
    if (data == process.env.COOKIE_ADMIN) {
      next();
    } else {
      next("Login err");
    }
  }
};

export { check_admin };
