const mongoose = require('mongoose');
const { errorHandler } = require("../helpers/error_handler");
const Language = require("../schemas/Language");
const { languageValidation } = require('../validations/language.validation');

const addNewLanguage = async (req, res) =>{
    try {
      
        const {error, value} = languageValidation(req.body)
        

        if(error){
          return errorHandler(error, res)
        }

        const {name, code} = value

        const newLanguage = await Language.create({
            name, 
            code
        });

        res.status(201).send({message: "Yangi til qo'shildi", newLanguage})
    } catch (error) {
        errorHandler(error, res)
    }
}

const getAllLanguage= async (req, res) => {
  try {
    const allLanguage = await Language.find({});

    res.status(201).send({allLanguage});
  } catch (error) {
    errorHandler(error, res)
  }
};

const getLanguageById = async (req, res) => {
  try {
    const id = req.params.id
    if(!mongoose.isValidObjectId(id)){
        return res.status(400).send({error:"Incorrect ObjectId"})
    }
    const language = await Language.findById(id)
    res.send({ language });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "serverda xatolik" });
  }
};

const updateLanguageById = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, code } = req.body;

    const updateLanguage = await Language.findByIdAndUpdate(
      { _id: id },
      { name, code },
      { new: true }
    );

    if(!updateLanguage){
      return res.status(404).send({error: "Til topilmadi!"})
    }

    res.send({ message: "Til yangilandi!",  updateLanguage});
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Server GetAllUsers" });
  }
};


const deleteLanguageById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "Incorrect ObjectId" });
    }
    const deleteLanguage = await Language.findByIdAndDelete({_id:id})
    
    if(!deleteLanguage){
      return res.status(404).send({error: "Til topilmadi"})
    }

    res.send({deleteLanguage})
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "serverda xatolik" });
  }
};





module.exports = {
    addNewLanguage,
    getAllLanguage,
    getLanguageById,
    updateLanguageById,
    deleteLanguageById
}