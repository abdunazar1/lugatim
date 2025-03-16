const { addNewRelationType, getAllRelationType, deleteRelationTypeById, updateRelationTypeById, getRelationTypeById } = require("../controller/relationType.controller")

const router=require("express").Router()

router.post("/", addNewRelationType)
router.get("/", getAllRelationType)
router.delete("/:id", deleteRelationTypeById)
router.put("/:id", updateRelationTypeById)
router.get("/:id", getRelationTypeById)

module.exports = router