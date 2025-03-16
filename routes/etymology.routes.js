const {
  addNewEtymology,
  getAllEtymology,
  deleteEtymologyById,
  updateEtymologyById,
  getEtymologyById,
} = require("../controller/etymology.controller");

const userAdminGuard = require("../middleware/guards/user.admin.guard");
const userGuard = require("../middleware/guards/user.guard");
const userSelfGuard = require("../middleware/guards/user.self.guard");

const router = require("express").Router();

router.post("/", userGuard, addNewEtymology);
router.get("/", userAdminGuard, getAllEtymology);
router.get("/:id", userGuard, getEtymologyById);
router.put("/:id", [userSelfGuard, userAdminGuard], updateEtymologyById);
router.delete("/:id", userAdminGuard, deleteEtymologyById);

module.exports = router;
