const {Schema, model} = require("mongoose")

const etymologySchema = new Schema(
  {
    etymology_id: {
      type: Number,
      required: true,
      unique: true
    },
    word_id: {
      type: Number,
      required: true
    },
    etymology_text: {
      type: String,
      required: true,
      trim: true
    },
    etymology_order: {
      type: Number,
      required: true
    },
    created_at: {
      type: Date,
      default: Date.now
    },
    created_by: {
      type: Number,
      required: true
    },
  },
{
 versionKey: false, 
}
)

module.exports = model("Etymology", etymologySchema)