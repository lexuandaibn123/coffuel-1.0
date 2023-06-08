import { pool } from "../config/connectDB.js";
import dotenv from "dotenv";
dotenv.config();

const getMessages = async (user_name) => {
  const [results, fields] = await pool.query(
    "select * from Chats where user_name=?",
    [user_name]
  );
  return results[0].user_message;
};

const saveMessages = async (user_name, user_message) => {
  const [results, fields] = await pool.query(
    "UPDATE Chats SET user_message=? where user_name=?",
    [user_message, user_name]
  );
};

const appendMessages = async (user_name, new_message) => {
  let old_message = await getMessages(user_name);
  new_message = old_message + new_message + process.env.SEPARATOR_CHAR;
  await saveMessages(user_name, new_message);
};

const cleanMessages = async (user_name) => {
  const [results, fields] = await pool.query(
    "select * from Chats where user_name=?",
    [user_name]
  );
  let user_message = results.user_message.toString();
  let arr = user_message.match("User:");
  let position = 0;
  if (arr.length > 100) {
    position = user_message.lastIndexOf("User:", 2000);
    user_message = user_message.slice(position);
    await saveMessages(user_name, user_message);
  }
};

const checkMessages = async (user_name) => {
  const [results, fields] = await pool.query(
    "select * from Chats where user_name=?",
    [user_name]
  );
  if (results.length !== 1) {
    const [results, fields] = await pool.query(
      "INSERT INTO Chats (user_name, user_message) VALUES (?, ?)",
      [user_name, ""]
    );
    return false;
  } else return true;
};

const count_new_message = async (user_name) => {
  const [results, fields] = await pool.query(
    `select * from Count_Messages where user_name='${user_name}'`
  );
  const arr = results;
  if (arr.length == 0) {
    const [results, fields] = await pool.query(
      "insert into Count_Messages (user_name, user_count_message) values (?, ?)",
      [user_name, 1]
    );
  } else {
    let old_count = arr[0].user_count_message;
    let count = old_count + 1;
    const [results, fields] = await pool.query(
      `UPDATE Count_Messages SET user_count_message=${count} where user_name='${user_name}'`
    );
  }
};

const reset_count_message = async (user_name) => {
  // check xem tồn tại không
  const [results, fields] = await pool.query(
    `select * from Count_Messages where user_name='${user_name}'`
  );
  const arr = results;
  if (arr.length == 0) {
    const [results, fields] = await pool.query(
      "insert into Count_Messages (user_name, user_count_message) values (?, ?)",
      [user_name, 0]
    );
  } else {
    const [results, fields] = await pool.query(
      "UPDATE Count_Messages SET user_count_message=? where user_name=?",
      [0, user_name]
    );
  }
};

const get_new_message = async () => {
  const [results, fields] = await pool.query("select * from Count_Messages");
  return results;
};
export {
  getMessages,
  saveMessages,
  cleanMessages,
  appendMessages,
  checkMessages,
  count_new_message,
  reset_count_message,
  get_new_message,
};
