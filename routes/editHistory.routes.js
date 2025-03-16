const {
  addNewEditHistory,
  getAllEditHistories,
  getEditHistoryById,
  updateEditHistoryById,
  deleteEditHistoryById,
} = require("../controller/editHistory.controller");

const userAdminGuard = require("../middleware/guards/user.admin.guard");
const userGuard = require("../middleware/guards/user.guard");
const userSelfGuard = require("../middleware/guards/user.self.guard");

const router = require("express").Router();

router.post("/", userGuard, addNewEditHistory);
router.get("/", userAdminGuard, getAllEditHistories);
router.get("/:id", userGuard, getEditHistoryById);
router.put("/:id", [userSelfGuard, userAdminGuard], updateEditHistoryById);
router.delete("/:id", userAdminGuard, deleteEditHistoryById);
module.exports = router;
