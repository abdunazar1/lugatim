const router=require("express").Router()

const wordsRoute = require("./words.routes")
const usersRoute = require("./users.routes")
const languageRoute = require("./language.routes")
const etymologyRoute = require("./etymology.routes")
const pronunciationRoute = require("./pronunciation.routes")
const categoryRoute = require("./category.routes")
const partOfSpeechRoute = require("./partOfSpeech.routes")
const relationTypeRoute = require("./relationType.routes")
const definitionRoute = require("./definition.routes")

router.use("/words", wordsRoute)
router.use("/users", usersRoute)
router.use("/language", languageRoute)
router.use("/etymology", etymologyRoute)
router.use("/pronunciation", pronunciationRoute)
router.use("/category", categoryRoute)
router.use("/partOfSpeech", partOfSpeechRoute)
router.use("/relationType", relationTypeRoute)
router.use("/definition", definitionRoute)

module.exports = router