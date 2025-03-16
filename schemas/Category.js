const {Schema, model} = require("mongoose")

const etymologySchema = new Schema(
  {
    category_id: {
      type: Number,
      required: true,
      unique: true
    },
    category_name: {
      type: String,
      required: true,
      trim: true
    },
    category_description: {
      type: String,
      required: true,
      trim: true
    },
    parent_category_id: {
      type: Number,
      required: true
    },
    is_active: {
      type: Boolean
    }
  },
{
 versionKey: false, 
}
)

module.exports = model("Category", etymologySchema)