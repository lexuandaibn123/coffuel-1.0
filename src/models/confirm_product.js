import { Confirm_Product } from "../services/CRUDProduct.js";

const confirm_product = async (req, res) => {
  let id = req.params.id;
  await Confirm_Product(id);
  res.redirect("/admin/read_database_product");
};
export { confirm_product };
