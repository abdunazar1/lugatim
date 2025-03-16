const {
  addNewWord,
  getAllWord,
  deleteWordById,
  updateWordById,
  getWordById,
} = require("../controller/words.controller");

const userAdminGuard = require("../middleware/guards/user.admin.guard");
const userGuard = require("../middleware/guards/user.guard");

const router = require("express").Router();

router.post("/", userAdminGuard, addNewWord);
router.get("/", getAllWord);
router.get("/:id", getWordById);
router.put("/:id", userAdminGuard, updateWordById);
router.delete("/:id", userAdminGuard, deleteWordById);

module.exports = router;
