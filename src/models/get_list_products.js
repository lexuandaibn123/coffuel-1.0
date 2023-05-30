import { getList } from "../services/CRUDListProducts.js";
const get_list_products = async (req, res) => {
  const list_products = await getList();
  res.send(list_products);
};
export { get_list_products };
