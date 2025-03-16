const {Schema, model} = require("mongoose")

const partOfSpeechSchema = new Schema(
  {
    part_of_speech_id: {
      type: Number,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    abbreviation: {
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

module.exports = model("PartOfSpeech", partOfSpeechSchema)