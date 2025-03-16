const {Schema, model} = require("mongoose")

const pronunciationSchema = new Schema(
  {
    pronunciation_id: {
      type: Number,
      required: true,
      unique: true
    },
    word_id: {
      type: Number,
      required: true
    },
    ipa_text: {
      type: String,
      required: true,
      trim: true
    },
    audio_file_path: {
      type: String,
      required: true,
      trim: true

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

module.exports = model("Pronunciation", pronunciationSchema)