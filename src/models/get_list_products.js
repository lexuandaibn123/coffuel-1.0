import { getList } from "../services/CRUDListProducts.js";
const get_list_products = async (req, res) => {
  const language = req.cookies.language;
  let list_products;
  if (language != "vi") list_products = await getList("en");
  else list_products = await getList("vi");
  res.send(list_products);
};
export { get_list_products };
