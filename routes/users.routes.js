const {
  addNewUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  loginUser,
} = require("../controller/users.controller");
const userAdminGuard = require("../middleware/guards/user.admin.guard");

const userGuard = require("../middleware/guards/user.guard");
const userSelfGuard = require("../middleware/guards/user.self.guard");

const router = require("express").Router();

router.post("/", addNewUser);
router.post("/login", loginUser);
router.get("/", userGuard, userAdminGuard, getAllUsers);
router.get("/:id", userGuard, userSelfGuard, getUserById);
router.put("/:id", updateUserById);
router.delete("/:id", deleteUserById);

module.exports = router;
