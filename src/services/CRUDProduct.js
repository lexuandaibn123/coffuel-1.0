import { pool } from "../config/connectDB.js";

const AddProduct = async (
  user_name,
  user_fullname,
  user_address,
  user_product,
  user_quantity,
  user_tel,
  user_email,
  user_state
) => {
  const [results, fields] = await pool.query(
    "INSERT INTO Products (user_name, user_fullname, user_address, user_product, user_quantity, user_tel, user_email, user_state) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [
      user_name,
      user_fullname,
      user_address,
      user_product,
      user_quantity,
      user_tel,
      user_email,
      user_state,
    ]
  );
};

const getAllProducts = async () => {
  const [results, fields] = await pool.query("select * from Products");
  return results;
};
const User_Product = async (text) => {
  const [results, fields] = await pool.query(
    `select * from Products where user_name='${text}'`
  );
  if (results.length == 0) return "Không có kết quả";
  else return results;
};
const Confirm_Product = async (id) => {
  const [results, fields] = await pool.query(
    `select * from Products where id=${id}`
  );
  if (results[0].user_state == "chưa xác nhận") {
    const [results, fields] = await pool.query(
      `UPDATE Products SET user_state="đã xác nhận" where id=${id}`
    );
  } else {
    const [results, fields] = await pool.query(
      `UPDATE Products SET user_state="chưa xác nhận" where id=${id}`
    );
  }
};
export { AddProduct, getAllProducts, User_Product, Confirm_Product };
