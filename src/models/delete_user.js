import { getUser, deleteUser } from "../services/CRUDService.js";

const delete_user_id = async (req, res) => {
  const user_id = await getUser(req.params.id);
  res.render("delete_database", {
    user: user_id,
  });
};
const delete_user = async (req, res) => {
  await deleteUser(req.body.user_id);
  res.redirect("/admin/read_database_user");
};
export { delete_user_id, delete_user };
