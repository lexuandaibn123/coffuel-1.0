import dotenv from "dotenv";
dotenv.config();

const check_admin = (req, res, next) => {
  const user_name = req.body.user_name;
  const password = req.body.password;
  if (
    user_name == process.env.DB_ADMIN &&
    password == process.env.DB_ADMIN_PASSWORD
  ) {
    next();
  } else {
    console.log("Someone tried to login to the admin page");
    next("Account does not exist");
  }
};

export { check_admin };
