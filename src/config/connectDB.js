import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

// const connection = mysql.createConnection({  // dễ quá tải do không đóng các connection sau khi sử dụng => dùng connection pool (nó giới hạn 1000 connection cùng lúc)
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// }); // pool giống connection chỉ khác ban đầu khởi tạo

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: process.env.DB_CONNECTION_LIMIT, // giới hạn các connection
  queueLimit: 0,
});

export { pool };

// connection.query("select * from Users", (err, results, fields) => {
//   console.log(results);
// });
