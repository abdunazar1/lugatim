const {
  addNewCategory,
  getAllCategory,
  deleteCategoryById,
  updateCategoryById,
  getCategoryById,
} = require("../controller/category.controller");
const userAdminGuard = require("../middleware/guards/user.admin.guard");
const userSelfGuard = require("../middleware/guards/user.self.guard");

const router = require("express").Router();

router.post("/", userAdminGuard, addNewCategory);
router.get("/",userSelfGuard, getAllCategory);
router.delete("/:id", userAdminGuard, deleteCategoryById);
router.put("/:id", userAdminGuard, updateCategoryById);
router.get("/:id", userSelfGuard, getCategoryById);

module.exports = router;
