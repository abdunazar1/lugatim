const router = require("express").Router();

const wordsRoute = require("./words.routes");
const usersRoute = require("./users.routes");
const languageRoute = require("./language.routes");
const etymologyRoute = require("./etymology.routes");
const pronunciationRoute = require("./pronunciation.routes");
const categoryRoute = require("./category.routes");
const partOfSpeechRoute = require("./partOfSpeech.routes");
const relationTypeRoute = require("./relationType.routes");
const definitionRoute = require("./definition.routes");

const editHistoryRoute = require("./editHistory.routes");
const discussionRoute = require("./discussion.routes");
const relatedWordsRoute = require("./relatedWords.routes");
const translationsRoute = require("./translations.routes");
const examplesRoute = require("./examples.routes");
const wordCategoriesRoute = require("./wordCategories.routes");

router.use("/words", wordsRoute);
router.use("/users", usersRoute);
router.use("/language", languageRoute);
router.use("/etymology", etymologyRoute);
router.use("/pronunciation", pronunciationRoute);
router.use("/category", categoryRoute);
router.use("/partOfSpeech", partOfSpeechRoute);
router.use("/relationType", relationTypeRoute);
router.use("/definition", definitionRoute);

router.use("/editHistory", editHistoryRoute);
router.use("/discussion", discussionRoute);
router.use("/relatedWords", relatedWordsRoute);
router.use("/translations", translationsRoute);
router.use("/examples", examplesRoute);
router.use("/wordCategories", wordCategoriesRoute);

module.exports = router;
