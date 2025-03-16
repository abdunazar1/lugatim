const mongoose = require('mongoose');
const { errorHandler } = require("../helpers/error_handler");
const Words = require("../schemas/Words");
const Joi = require('joi');
const { wordsValidation } = require('../validations/words.validation');

const addNewWord = async (req, res) =>{
    try {
      
        const {error, value} = wordsValidation(req.body)
        

        if(error){
          return errorHandler(error, res)
        }

        const {word} = value

        const newWord = await Words.create({
            word, 
            letter: word[0].toUpperCase()
        });

        res.status(201).send({message: "Yangi so'z qo'shildi", newWord})
    } catch (error) {
        errorHandler(error, res)
    }
}

const getAllWord = async (req, res) => {
  try {
    const allWords = await Words.find({}).populate("word");

    res.status(201).send({allWords});
  } catch (error) {
    errorHandler(error, res)
  }
};

const getWordById = async (req, res) => {
  try {
    const id=req.params.id
    if(!mongoose.isValidObjectId(id)){
        return res.status(400).send({error:"Incorrect ObjectId"})
    }
    const word = await Words.findById(id)
    res.send({ word });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "serverda xatolik" });
  }
};

const updateWordById = async (req, res) => {
  try {
    const id = req.params.id;
    const { word, letter } = req.body;
    const word1 = await Words.updateOne(
      { _id: id },
      { word, letter },
      { new: true }
    );
    res.send({ word1 });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Server GetAllUsers" });
  }
};


const deleteWordById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "Incorrect ObjectId" });
    }
    const word = await Words.findByIdAndDelete({_id:id})
    
    res.send({word})
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "serverda xatolik" });
  }
};





module.exports = {
    addNewWord,
    getAllWord,
    getWordById,
    updateWordById,
    deleteWordById
}