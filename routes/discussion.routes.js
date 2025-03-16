const {
  addNewDiscussion,
  getAllDiscussions,
  getDiscussionById,
  updateDiscussionById,
  deleteDiscussionById,
} = require("../controller/discussion.controller");
const userAdminGuard = require("../middleware/guards/user.admin.guard");
const userSelfGuard = require("../middleware/guards/user.self.guard");

const router = require("express").Router();

router.post("/", addNewDiscussion);
router.get("/", getAllDiscussions);
router.get("/:id", getDiscussionById);
router.put("/:id", [userSelfGuard, userAdminGuard], updateDiscussionById);
router.delete("/:id", userSelfGuard, deleteDiscussionById);

module.exports = router;
