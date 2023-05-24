import dotenv from "dotenv";
dotenv.config();

const login_admin = (req, res, next) => {
  if (
    req.body.user_name == process.env.DB_ADMIN &&
    req.body.user_password == process.env.DB_ADMIN_PASSWORD
  ) {
    res.send(process.env.COOKIE_ADMIN);
  } else {
    next("Account does not exist");
  }
};

export { login_admin };
