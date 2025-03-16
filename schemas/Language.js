const {Schema, model} = require("mongoose")

const languageSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    code: {
      type: [String],
      required: true,
      trim: true,
      unique: true
    }
  },
{
 versionKey: false, 
}
)

module.exports = model("Language",languageSchema)