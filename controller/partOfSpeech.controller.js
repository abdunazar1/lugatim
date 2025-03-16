const mongoose = require("mongoose");
const { errorHandler } = require("../helpers/error_handler");
const PartOfSpeech = require("../schemas/PartOfSpeech");
const partOfSpeechValidation = require("../validations/partOfSpeech");
const addNewPartOfSpeech = async (req, res) => {
  try {
    const { error, value } = partOfSpeechValidation(req.body);

    if (error) {
      return errorHandler(error, res);
    }
    const { part_of_speech_id, name, abbreviation, description } = value;
    const newPartOfSpeech = await PartOfSpeech.create({
      part_of_speech_id,
      name,
      abbreviation,
      description,
    });

    res
      .status(201)
      .send({ message: "PartOfSpeech qo'shildi", newPartOfSpeech });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllPartOfSpeech = async (req, res) => {
  try {
    const allPartOfSpeech = await PartOfSpeech.find({});

    res.status(200).send({ allPartOfSpeech });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getPartOfSpeechById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "Incorrect ObjectId" });
    }
    const partOfSpeech = await PartOfSpeech.findById(id);
    res.send({ partOfSpeech });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "serverda xatolik" });
  }
};

const updatePartOfSpeechById = async (req, res) => {
  try {
    const id = req.params.id;
    const { part_of_speech_id, name, abbreviation, description } = req.body;

    const updatePartOfSpeech = await PartOfSpeech.findByIdAndUpdate(
      { _id: id },
      {
        part_of_speech_id,
        name,
        abbreviation,
        description,
      },
      { new: true }
    );

    if (!updatePartOfSpeech) {
      return res.status(404).send({ error: "Til topilmadi!" });
    }

    res.send({ message: "PartOfSpeech yangilandi!", updatePartOfSpeech });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Server GetAllUsers" });
  }
};

const deletePartOfSpeechById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "Incorrect ObjectId" });
    }
    const deletePartOfSpeech = await PartOfSpeech.findByIdAndDelete({
      _id: id,
    });

    if (!deletePartOfSpeech) {
      return res.status(404).send({ error: "PartOfSpeech topilmadi" });
    }

    res.send({ deletePartOfSpeech });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "serverda xatolik" });
  }
};

module.exports = {
  addNewPartOfSpeech,
  getAllPartOfSpeech,
  getPartOfSpeechById,
  updatePartOfSpeechById,
  deletePartOfSpeechById,
};
