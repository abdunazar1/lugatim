const { addNewEtymology, getAllEtymology, deleteEtymologyById, updateEtymologyById, getEtymologyById } = require("../controller/etymology.controller")

const router=require("express").Router()

router.post("/", addNewEtymology)
router.get("/", getAllEtymology)
router.delete("/:id", deleteEtymologyById)
router.put("/:id", updateEtymologyById)
router.get("/:id", getEtymologyById)

module.exports = router