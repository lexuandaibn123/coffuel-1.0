import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const convert_next = (data) => {
  const token = jwt.sign(data, process.env.SECRET);
  return token;
};
const convert_back = (token) => {
  const arr = token.split("."); // tại nếu syntax của token không đúng a.b.c nó sẽ lỗi không dịch
  let data;
  if (arr.length < 3) {
    data = "";
  } else data = jwt.verify(token, process.env.SECRET);
  return data;
};
export { convert_next, convert_back };
