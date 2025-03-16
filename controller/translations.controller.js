const mongoose = require("mongoose");
const { errorHandler } = require("../helpers/error_handler");
const Translations = require("../schemas/Translations");
const {
  translationsValidation,
} = require("../validations/translations.validation");

const addNewTranslation = async (req, res) => {
  try {
    const { error, value } = translationsValidation(req.body);
    if (error) {
      return errorHandler(error, res);
    }

    const newTranslation = await Translations.create(value);
    res
      .status(201)
      .send({ message: "Yangi tarjima qo'shildi", newTranslation });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllTranslations = async (req, res) => {
  try {
    const translations = await Translations.find({});
    res.status(200).send({ translations });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getTranslationById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "Incorrect ObjectId" });
    }
    const translation = await Translations.findById(id);
    res.send({ translation });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateTranslationById = async (req, res) => {
  try {
    const id = req.params.id;
    const { error, value } = translationsValidation(req.body);
    if (error) {
      return errorHandler(error, res);
    }

    const updateTranslation = await Translations.findByIdAndUpdate(id, value, {
      new: true,
    });

    if (!updateTranslation) {
      return res.status(404).send({ error: "Tarjima topilmadi!" });
    }

    res.send({ message: "Tarjima yangilandi!", updateTranslation });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteTranslationById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "Incorrect ObjectId" });
    }
    const deleteTranslation = await Translations.findByIdAndDelete(id);

    if (!deleteTranslation) {
      return res.status(404).send({ error: "Tarjima topilmadi" });
    }

    res.send({ message: "Tarjima o'chirildi", deleteTranslation });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewTranslation,
  getAllTranslations,
  getTranslationById,
  updateTranslationById,
  deleteTranslationById,
};
