import dotenv from "dotenv";
dotenv.config();

const check_admin = async (req, res, next) => {
  let cookie = req.cookies.techstart_coofuel;
  if (!cookie) {
    res.redirect("/admin");
  } else {
    if (cookie == process.env.COOKIE_ADMIN) {
      next();
    } else {
      next("Login err");
    }
  }
};

export { check_admin };
