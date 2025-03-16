const {
  getAllWordCategories,
  getWordCategoryById,
  updateWordCategoryById,
  deleteWordCategoryById,
  addNewWordCategory,
} = require("../controller/wordCategories.controller");

const userAdminGuard = require("../middleware/guards/user.admin.guard");
const userGuard = require("../middleware/guards/user.guard");

const router = require("express").Router();

router.post("/", userAdminGuard, addNewWordCategory);
router.get("/", getAllWordCategories);
router.get("/:id", getWordCategoryById);
router.put("/:id", userAdminGuard, updateWordCategoryById);
router.delete("/:id", userAdminGuard, deleteWordCategoryById);

module.exports = router;
