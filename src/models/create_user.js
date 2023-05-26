import { AddUser } from "../services/CRUDService.js";
const create_user = async (req, res, next) => {
  const user_name = req.body.user_name;
  const user_password = req.body.user_password;
  const user_email = req.body.user_email;
  const user_tel = req.body.user_tel;
  if (!user_email || !user_password || !user_name || !user_tel) {
    console.log("Error");
  } else {
    await AddUser(user_name, user_password, user_email, user_tel);
  }
  next();
};

export { create_user };
