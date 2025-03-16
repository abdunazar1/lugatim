const mongoose = require('mongoose');
const { errorHandler } = require("../helpers/error_handler");
const RelationType = require('../schemas/RelationType');
const { relationTypeValidation } = require('../validations/relationType');

const addNewRelationType = async (req, res) =>{
    try {
      
        const {error, value} = relationTypeValidation(req.body)
        

        if(error){
          return errorHandler(error, res)
        }

        const {
          relation_type_id, 
          relation_name,
          description
        } = value

        const newRelationType = await RelationType.create({
          relation_type_id, 
          relation_name,
          description
        });

        res.status(201).send({message: "RelationType qo'shildi", newRelationType})
    } catch (error) {
        errorHandler(error, res)
    }
}

const getAllRelationType= async (req, res) => {
  try {
    const allRelationType = await RelationType.find({});

    res.status(200).send({allRelationType});
  } catch (error) {
    errorHandler(error, res)
  }
};

const getRelationTypeById = async (req, res) => {
  try {
    const id = req.params.id
    if(!mongoose.isValidObjectId(id)){
        return res.status(400).send({error:"Incorrect ObjectId"})
    }
    const relationType = await RelationType.findById(id)
    res.send({ relationType });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "serverda xatolik" });
  }
};

const updateRelationTypeById = async (req, res) => {
  try {
    const id = req.params.id;
    const { 
      relation_type_id, 
      relation_name,
      description
    } = req.body;

    const updateRelationType = await RelationType.findByIdAndUpdate(
      { _id: id },
      { 
        relation_type_id, 
        relation_name,
        description
      },
      { new: true }
    );

    if(!updateRelationType){
      return res.status(404).send({error: "Til topilmadi!"})
    }

    res.send({ message: "RelationType yangilandi!",  updateRelationType});
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Server GetAllUsers" });
  }
};


const deleteRelationTypeById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ error: "Incorrect ObjectId" });
    }
    const deleteRelationType = await RelationType.findByIdAndDelete({_id:id})
    
    if(!deleteRelationType){
      return res.status(404).send({error: "RelationType topilmadi"})
    }

    res.send({deleteRelationType})
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "serverda xatolik" });
  }
};





module.exports = {
    addNewRelationType,
    getAllRelationType,
    getRelationTypeById,
    updateRelationTypeById,
    deleteRelationTypeById
}