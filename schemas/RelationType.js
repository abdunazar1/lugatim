const {Schema, model} = require("mongoose")

const relationTypeSchema = new Schema(
  {
    relation_type_id: {
      type: Number,
      required: true,
      unique: true
    },
    relation_name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    }
  },
{
 versionKey: false, 
}
)

module.exports = model("RelationType", relationTypeSchema)