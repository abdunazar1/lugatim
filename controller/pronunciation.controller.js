const mongoose = require('mongoose');
const { errorHandler } = require("../helpers/error_handler");
const Pronunciation = require('../schemas/Pronunciation');
const { pronunciationValidation } = require('../validations/pronunciation.validation');

const addNewPronunciation = async (req, res) =>{
    try {
      
        const {error, value} = pronunciationValidation(req.body)
        

        if(error){
          return errorHandler(error, res)
        }

        const {
          pronunciation_id, 
          word_id,
          ipa_text,
          audio_file_path,
          created_at,
          created_by
        } = value

        const newPronunciation = await Pronunciation.create({
          pronunciation_id, 
          word_id,
          ipa_text,
          audio_file_path,
          created_at,
          created_by
        });

        res.status(201).send({message: "Pronunciation qo'shildi", newPronunciation})
    } catch (error) {
        errorHandler(error, res)
    }
}

const getAllPronunciation= async (req, res) => {
  try {
    const allPronunciation = await Pronunciation.find({});

    res.status(200).send({allPronunciation});
  } catch (error) {
    errorHandler(error, res)
  }
};

const getPronunciationById = async (req, res) => {
  try {
    const id = req.params.id
    if(!mongoose.isValidObjectId(id)){
        return res.status(400).send({error:"Incorrect ObjectId"})
    }
    const pronunciation = await Pronunciation.findById(id)
    res.send({ pronunciation });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "serverda xatolik" });
  }
};

const updatePronunciationById = async (req, res) => {
  try {
    const id = req.params.id;
    const { 
      pronunciation_id, 
      word_id,
      ipa_text,
      audio_file_path,
      created_at,
      created_by } = req.body;

    const updatePronunciation = await Pronunciation.findByIdAndUpdate(
      { _id: id },
      { 
        pronunciation_id, 
        word_id,
        ipa_text,
        audio_file_path,
        created_at,
        created_by },
      { new: true }
    );

    if(!updatePronunciation){
      return res.status(404).send({error: "Til topilmadi!"})
    }

    res.send({ message: "Pronunciation yangilandi!",  updatePronunciation});
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Server GetAllPronunciation" });
  }
};


const deletePronunciationById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "Incorrect ObjectId" });
    }
    const deletePronunciation = await Pronunciation.findByIdAndDelete({_id:id})
    
    if(!deletePronunciation){
      return res.status(404).send({error: "Pronunciation topilmadi"})
    }

    res.send({deletePronunciation})
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "serverda xatolik" });
  }
};





module.exports = {
    addNewPronunciation,
    getAllPronunciation,
    getPronunciationById,
    updatePronunciationById,
    deletePronunciationById
}