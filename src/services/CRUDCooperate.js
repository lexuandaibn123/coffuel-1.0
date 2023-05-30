import { pool } from "../config/connectDB.js";

const AddCooperate = async (
  user_name,
  user_fullname,
  user_company,
  user_tel,
  user_address,
  user_product,
  user_quantity,
  user_state
) => {
  const [results, fields] = await pool.query(
    "INSERT INTO Cooperates (user_name, user_fullname, user_company, user_tel, user_address, user_product, user_quantity, user_state) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [
      user_name,
      user_fullname,
      user_company,
      user_tel,
      user_address,
      user_product,
      user_quantity,
      user_state,
    ]
  );
};

const User_Cooperate = async (text) => {
  const [results, fields] = await pool.query(
    "select * from Cooperates where user_name=?",
    [text]
  );
  if (results.length == 0) return "Không có kết quả";
  else return results;
};
export { AddCooperate, User_Cooperate };
