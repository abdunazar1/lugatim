const {
  addNewDefinition,
  getAllDefinition,
  deleteDefinitionById,
  updateDefinitionById,
  getDefinitionById,
} = require("../controller/definition.controller");
const userAdminGuard = require("../middleware/guards/user.admin.guard");
const userGuard = require("../middleware/guards/user.guard");
const userSelfGuard = require("../middleware/guards/user.self.guard");

const router = require("express").Router();

router.post("/", userGuard, addNewDefinition);
router.get("/", userAdminGuard, getAllDefinition);
router.delete("/:id", userSelfGuard, deleteDefinitionById);
router.put("/:id", userAdminGuard, updateDefinitionById);
router.get("/:id", getDefinitionById);

module.exports = router;
