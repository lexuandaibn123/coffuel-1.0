import { pool } from "../config/connectDB.js";

const getList = async (language) => {
  if (language == "vi") {
    const [results, fields] = await pool.query("select * from List_Products");
    return results;
  } else {
    const [results, fields] = await pool.query(
      "select * from List_Products_en"
    );
    return results;
  }
};
export { getList };
