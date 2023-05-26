import { getUser, updateUser } from "../services/CRUDService.js";

const update_user_id = async (req, res) => {
  const user_id = await getUser(req.params.id);
  res.render("update_database", {
    user: user_id,
  });
};
const update_user = async (req, res) => {
  await updateUser(req.body);
  res.redirect("/admin/read_database_user");
};
export { update_user_id, update_user };
