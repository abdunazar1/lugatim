const mongoose = require('mongoose');
const { errorHandler } = require("../helpers/error_handler");
const { etymologyValidation } = require('../validations/etymology.validation');
const Etymology = require('../schemas/Etymology');

const addNewEtymology = async (req, res) =>{
    try {
      
        const {error, value} = etymologyValidation(req.body)
        

        if(error){
          return errorHandler(error, res)
        }

        const {
          etymology_id, 
          word_id,
          etymology_text,
          etymology_order,
          created_at,
          created_by
        } = value

        const newEtymology = await Etymology.create({
          etymology_id, 
          word_id,
          etymology_text,
          etymology_order,
          created_at,
          created_by
        });

        res.status(201).send({message: "Etymology qo'shildi", newEtymology})
    } catch (error) {
        errorHandler(error, res)
    }
}

const getAllEtymology= async (req, res) => {
  try {
    const allEtymology = await Etymology.find({});

    res.status(200).send({allEtymology});
  } catch (error) {
    errorHandler(error, res)
  }
};

const getEtymologyById = async (req, res) => {
  try {
    const id = req.params.id
    if(!mongoose.isValidObjectId(id)){
        return res.status(400).send({error:"Incorrect ObjectId"})
    }
    const etymology = await Etymology.findById(id)
    res.send({ etymology });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "serverda xatolik" });
  }
};

const updateEtymologyById = async (req, res) => {
  try {
    const id = req.params.id;
    const { 
        etymology_id, 
          word_id,
          etymology_text,
          etymology_order,
          created_at,
          created_by } = req.body;

    const updateEtymology = await Etymology.findByIdAndUpdate(
      { _id: id },
      { 
          etymology_id, 
          word_id,
          etymology_text,
          etymology_order,
          created_at,
          created_by },
      { new: true }
    );

    if(!updateEtymology){
      return res.status(404).send({error: "Til topilmadi!"})
    }

    res.send({ message: "Etymology yangilandi!",  updateEtymology});
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Server GetAllUsers" });
  }
};


const deleteEtymologyById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "Incorrect ObjectId" });
    }
    const deleteEtymology = await Etymology.findByIdAndDelete({_id:id})
    
    if(!deleteEtymology){
      return res.status(404).send({error: "Etymology topilmadi"})
    }

    res.send({deleteEtymology})
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "serverda xatolik" });
  }
};





module.exports = {
    addNewEtymology,
    getAllEtymology,
    getEtymologyById,
    updateEtymologyById,
    deleteEtymologyById
}