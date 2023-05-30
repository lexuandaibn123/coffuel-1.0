import { AddCooperate } from "../services/CRUDCooperate.js";
const create_cooperate = async (req, res, next) => {
  const user_name = req.cookies.account_techstart_coffuel.toString().slice(18);
  const user_fullname = req.body.user_fullname.trim();
  const user_address = req.body.user_address.trim();
  const user_product = req.body.user_product.trim();
  const user_quantity = req.body.user_quantity.trim();
  const user_tel = req.body.user_tel.trim();
  const user_company = req.body.user_company.trim();
  const user_state = "chưa xác nhận";

  if (
    !user_address ||
    !user_name ||
    !user_tel ||
    !user_fullname ||
    !user_product ||
    !user_quantity ||
    !user_company
  ) {
    console.log("Error");
  } else {
    await AddCooperate(
      user_name,
      user_fullname,
      user_company,
      user_tel,
      user_address,
      user_product,
      user_quantity,
      user_state
    );
  }
  next();
};

export { create_cooperate };
