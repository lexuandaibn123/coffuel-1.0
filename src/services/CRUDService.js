import { pool } from "../config/connectDB.js";

const getAllUsers = async () => {
  const [results, fields] = await pool.query("select * from Users");
  return results;
};

const AddUser = async (user_name, user_password, user_email) => {
  const [results, fields] = await pool.query(
    `INSERT INTO Users (user_name, user_password, user_email) VALUES ('${user_name}', '${user_password}', '${user_email}')`
  );
};

export { getAllUsers, AddUser };
