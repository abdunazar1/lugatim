const {
  addNewLanguage,
  getAllLanguage,
  deleteLanguageById,
  updateLanguageById,
  getLanguageById,
} = require("../controller/language.controller");

const userAdminGuard = require("../middleware/guards/user.admin.guard");
const userGuard = require("../middleware/guards/user.guard");

const router = require("express").Router();

router.post("/", userAdminGuard, addNewLanguage);
router.get("/", getAllLanguage);
router.get("/:id", getLanguageById);
router.put("/:id", userAdminGuard, updateLanguageById);
router.delete("/:id", userAdminGuard, deleteLanguageById);

module.exports = router;
