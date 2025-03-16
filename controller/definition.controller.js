const mongoose = require('mongoose');
const { errorHandler } = require("../helpers/error_handler");
const Definition = require('../schemas/Definition');
const { definitionValidation } = require('../validations/definition.validation');

const addNewDefinition = async (req, res) =>{
    try {
      
        const {error, value} = definitionValidation(req.body)
        

        if(error){
          return errorHandler(error, res)
        }

        const {
          definition_id, 
          word_id,
          definition_text,
          part_of_speech_id,
          definition_order,
          created_at,
          update_at,
          created_by
        } = value

        const newDefinition = await Definition.create({
          definition_id, 
          word_id,
          definition_text,
          part_of_speech_id,
          definition_order,
          created_at,
          update_at,
          created_by
        });

        res.status(201).send({message: "Definition qo'shildi", newDefinition})
    } catch (error) {
        errorHandler(error, res)
    }
}

const getAllDefinition= async (req, res) => {
  try {
    const allDefinition = await Definition.find({});

    res.status(200).send({allDefinition});
  } catch (error) {
    errorHandler(error, res)
  }
};

const getDefinitionById = async (req, res) => {
  try {
    const id = req.params.id
    if(!mongoose.isValidObjectId(id)){
        return res.status(400).send({error:"Incorrect ObjectId"})
    }
    const definition = await Definition.findById(id)
    res.send({ definition });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "serverda xatolik" });
  }
};

const updateDefinitionById = async (req, res) => {
  try {
    const id = req.params.id;
    const { 
      definition_id, 
      word_id,
      definition_text,
      part_of_speech_id,
      definition_order,
      created_at,
      update_at,
      created_by    
    } = req.body;

    const updateDefinition = await Definition.findByIdAndUpdate(
      { _id: id },
      { 
        definition_id, 
        word_id,
        definition_text,
        part_of_speech_id,
        definition_order,
        created_at,
        update_at,
        created_by
        },
      { new: true }
    );

    if(!updateDefinition){
      return res.status(404).send({error: "Til topilmadi!"})
    }

    res.send({ message: "Definition yangilandi!",  updateDefinition});
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Server GetAllUsers" });
  }
};


const deleteDefinitionById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "Incorrect ObjectId" });
    }
    const deleteDefinition = await Definition.findByIdAndDelete({_id:id})
    
    if(!deleteDefinition){
      return res.status(404).send({error: "Definition topilmadi"})
    }

    res.send({deleteDefinition})
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "serverda xatolik" });
  }
};





module.exports = {
    addNewDefinition,
    getAllDefinition,
    getDefinitionById,
    updateDefinitionById,
    deleteDefinitionById
}