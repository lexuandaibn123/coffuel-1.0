import { pool } from "../config/connectDB.js";
import { AddUser } from "../services/CRUDService.js";
const add_item = async (req, res, next) => {
  const user_name = req.body.user_name;
  const user_password = req.body.user_password;
  const user_email = req.body.user_email;
  if (!user_email || !user_password || !user_name) {
    console.log("Error");
  } else await AddUser(user_name, user_password, user_email);
  next();
};

export { add_item };
