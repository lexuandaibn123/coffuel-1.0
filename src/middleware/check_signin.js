import { checkUser } from "../services/CRUDService.js";
import { convert_back } from "../services/JWT.js";

const check_signin = async (req, res, next) => {
  let cookie = req.cookies.account_techstart_coffuel;
  if (!cookie) cookie = "";
  let data = convert_back(cookie);
  let text = await checkUser(data);
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
    let data = convert_back(cookie);
    let text = await checkUser(data);
    if (text == "OK") {
      res.render("home", {
        message: "login",
        user: "omg",
      });
    } else {
      res.render("home", {
        message: "",
        user: "omg",
      });
    }
  }
};
export { check_signin, check_home };
