import { pool } from "../config/connectDB.js";
import { AddUser } from "../services/CRUDService.js";
const add_item = (req, res) => {
  const user_name = req.body.user_name;
  const user_password = req.body.user_password;
  const user_email = req.body.user_email;

  AddUser(user_name, user_password, user_email);
};

export { add_item };
