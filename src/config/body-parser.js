import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import multer from "multer";
const upload = multer();

const set_bodyParser = (app) => {
  // phân tích application/json
  app.use(bodyParser.json());

  //phân tích application/xwww-
  app.use(bodyParser.urlencoded({ extended: true }));

  // phân tích multipart/form-data
  app.use(upload.array());

  // phân tích cookie
  app.use(cookieParser());
};

export { set_bodyParser };
