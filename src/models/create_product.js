import { AddProduct } from "../services/CRUDProduct.js";
const create_product = async (req, res, next) => {
  const user_name = req.cookies.account_techstart_coffuel.toString().slice(18);
  const user_fullname = req.body.user_fullname;
  const user_address = req.body.user_address;
  const user_product = req.body.user_product;
  const user_quantity = req.body.user_quantity;
  const user_email = req.body.user_email;
  const user_tel = req.body.user_tel;
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
      user_email
    );
  }
  next();
};

export { create_product };
