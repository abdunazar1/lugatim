const {
  deleteExampleById,
  updateExampleById,
  getExampleById,
  getAllExamples,
  addNewExample,
} = require("../controller/examples.controller");

const userAdminGuard = require("../middleware/guards/user.admin.guard");
const userGuard = require("../middleware/guards/user.guard");
const userSelfGuard = require("../middleware/guards/user.self.guard");

const router = require("express").Router();

router.post("/", userGuard, addNewExample);
router.get("/", getAllExamples);
router.get("/:id", getExampleById);
router.put("/:id", userSelfGuard, updateExampleById);
router.delete("/:id", userAdminGuard, deleteExampleById);

module.exports = router;
