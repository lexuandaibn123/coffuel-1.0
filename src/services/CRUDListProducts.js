import { pool } from "../config/connectDB.js";

const getList = async () => {
  const [results, fields] = await pool.query("select * from List_Products");
  return results;
};
export { getList };
