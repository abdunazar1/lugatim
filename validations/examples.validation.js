const Joi = require("joi");

exports.examplesValidation = (body) => {
  const schemaExamples = Joi.object({
    word_id: Joi.string().hex().length(24).required().messages({
      "any.required": "word_id majburiy maydon",
    }),
    example_sentence: Joi.string().min(3).max(500).required().messages({
      "any.required": "example_sentence majburiy maydon",
      "string.min": "example_sentence kamida 3 ta belgi bo'lishi kerak",
      "string.max": "example_sentence 500 ta belgidan oshmasligi kerak",
    }),
    source: Joi.string().max(255).allow("").messages({
      "string.max": "source 255 ta belgidan oshmasligi kerak",
    }),
  });

  return schemaExamples.validate(body, { abortEarly: false });
};
