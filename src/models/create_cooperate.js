import { AddCooperate } from "../services/CRUDCooperate.js";
const create_cooperate = async (req, res, next) => {
  const user_name = req.cookies.account_techstart_coffuel.toString().slice(18);
  const user_fullname = req.body.user_fullname;
  const user_address = req.body.user_address;
  const user_product = req.body.user_product;
  const user_quantity = req.body.user_quantity;
  const user_tel = req.body.user_tel;
  const user_company = req.body.user_company;

  const uploadedFiles = req.files;
  uploadedFiles.forEach((file) => {});
  if (
    !user_email ||
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
      user_address,
      user_product,
      user_quantity,
      user_tel,
      user_email
    );
  }
  next();
};

export { create_cooperate };
