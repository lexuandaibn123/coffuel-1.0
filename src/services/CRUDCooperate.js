import { pool } from "../config/connectDB.js";

const AddCooperate = async (
  user_name,
  user_fullname,
  user_address,
  user_product,
  user_quantity,
  user_tel,
  user_email
) => {
  const [results, fields] = await pool.query(
    "INSERT INTO Cooperates (user_name, user_fullname, user_address,user_product,user_quantity,user_tel,user_email) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [
      user_name,
      user_fullname,
      user_address,
      user_product,
      user_quantity,
      user_tel,
      user_email,
    ]
  );
};

const getAllProducts = async () => {
  const [results, fields] = await pool.query("select * from Products");
  return results;
};

export { AddCooperate, getAllProducts };
