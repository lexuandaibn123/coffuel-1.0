import { getAllProducts } from "../services/CRUDProduct.js";

const read_product = async (req, res) => {
  let results = await getAllProducts();
  res.render("read_database_product", {
    list_users: results,
  });
};

export { read_product };
