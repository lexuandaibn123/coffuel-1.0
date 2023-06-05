import { AddProduct } from "../services/CRUDProduct.js";
import { convert_back } from "../services/JWT.js";

const create_product = async (req, res, next) => {
  const user_name = convert_back(req.cookies.account_techstart_coffuel);
  const user_fullname = req.body.user_fullname.trim();
  const user_address = req.body.user_address.trim();
  const user_product = req.body.user_product.trim();
  const user_quantity = req.body.user_quantity.trim();
  const user_email = req.body.user_email.trim();
  const user_tel = req.body.user_tel.trim();
  const user_state = "chưa xác nhận";
  if (
    !user_email ||
    !user_address ||
    !user_name ||
    !user_tel ||
    !user_fullname ||
    !user_product ||
    !user_quantity
  ) {
    console.log("Error");
  } else {
    await AddProduct(
      user_name,
      user_fullname,
      user_address,
      user_product,
      user_quantity,
      user_tel,
      user_email,
      user_state
    );
  }
  next();
};

export { create_product };
