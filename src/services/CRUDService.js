import { pool } from "../config/connectDB.js";
import { convert_next } from "./JWT.js";

const getAllUsers = async () => {
  const [results, fields] = await pool.query("select * from Users");
  return results;
};

const getUser = async (id) => {
  const [results, fields] = await pool.query(
    `select * from Users where id='${id}'`
  );
  return results;
};

const updateUser = async (user) => {
  const [results, fields] = await pool.query(
    `UPDATE Users SET user_name='${user.user_name}', user_password='${user.user_password}', user_email='${user.user_email}', user_tel='${user.user_tel}' WHERE id='${user.user_id}';`
  );
};

const deleteUser = async (id) => {
  const [results, fields] = await pool.query(
    `DELETE FROM Users WHERE id='${id}';`
  );
};

const AddUser = async (user_name, user_password, user_email, user_tel) => {
  const [results, fields] = await pool.query(
    `INSERT INTO Users (user_name, user_password, user_email, user_tel) VALUES ('${user_name}', '${user_password}', '${user_email}', '${user_tel}')`
  );
};

const checkAccount = async (req, res) => {
  const [results, fields] = await pool.query(
    "SELECT * FROM Users WHERE user_name=?",
    [req.body.user_name]
  );
  if (results.length > 0) {
    res.send("Tài khoản đã tồn tại");
  } else {
    res.send("Hợp lệ");
  }
};

const CompareAccount = async (req, res) => {
  const [results, fields] = await pool.query(
    "SELECT * FROM Users WHERE user_name=?",
    [req.body.user_name]
  );
  if (results.length > 0) {
    if (results[0].user_password == req.body.user_password) {
      let token = convert_next(req.body.user_name);
      token = token.toString();
      let obj = { state: "OK", cookie: token };
      obj = JSON.stringify(obj);
      res.send(obj);
    } else {
      res.send({ err: "err" });
    }
  } else {
    res.send({ err: "err" });
  }
};

const checkUser = async (text) => {
  const [results, fields] = await pool.query(
    "SELECT * FROM Users WHERE user_name=?",
    [text]
  );
  if (results.length > 0) {
    return "OK";
  } else {
    return "Failed";
  }
};

const getMail = async () => {
  const [results, fields] = await pool.query("SELECT * FROM Mails");
  return results;
};

export {
  getAllUsers,
  getUser,
  AddUser,
  deleteUser,
  updateUser,
  checkAccount,
  checkUser,
  CompareAccount,
  getMail,
};
