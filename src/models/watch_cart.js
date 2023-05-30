import { User_Product } from "../services/CRUDProduct.js";
import { User_Cooperate } from "../services/CRUDCooperate.js";
import { convert_back } from "../services/JWT.js";

const watch_cart_product = async (req, res) => {
  let user_name = req.cookies.account_techstart_coffuel;
  user_name = convert_back(user_name);
  let obj = await User_Product(user_name);
  if (obj == "Không có kết quả") obj = [];
  res.render("cart", {
    list: obj,
    mode: "product",
  });
};
const watch_cart_cooperate = async (req, res) => {
  let user_name = req.cookies.account_techstart_coffuel;
  user_name = convert_back(user_name);
  let obj = await User_Cooperate(user_name);
  if (obj == "Không có kết quả") obj = [];
  res.render("cart", {
    list: obj,
    mode: "cooperate",
  });
};
export { watch_cart_product, watch_cart_cooperate };
