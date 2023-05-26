import { checkUser } from "../services/CRUDService.js";

const check_signin = async (req, res, next) => {
  let cookie = req.cookies.account_techstart_coffuel;
  if (!cookie) cookie = "";
  let text = await checkUser(cookie.toString().slice(18));
  if (text == "OK") {
    next();
  } else {
    res.redirect("/sign_in");
  }
};

// techstart_coffuel_username
const check_home = async (req, res) => {
  let cookie = req.cookies.account_techstart_coffuel;
  if (!cookie) {
    res.render("home", {
      message: "",
    });
  } else {
    let text = await checkUser(cookie.toString().slice(18));
    if (text == "OK") {
      res.render("home", {
        message: "login",
      });
    } else {
      res.render("home", {
        message: "",
      });
    }
  }
};
export { check_signin, check_home };
