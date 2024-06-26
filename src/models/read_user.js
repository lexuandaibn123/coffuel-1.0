import { getAllUsers } from "../services/CRUDService.js";

const read_user = async (req, res) => {
  let results = await getAllUsers();
  res.render("read_database", {
    list_users: results,
  });
};

export { read_user };
