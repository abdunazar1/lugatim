const Joi = require("joi");

exports.translationsValidation = (body) => {
  const schemaTranslations = Joi.object({
    word_id: Joi.string().hex().length(24).required().messages({
      "any.required": "word_id majburiy maydon",
    }),
    language_id: Joi.string().hex().length(24).required().messages({
      "any.required": "language_id majburiy maydon",
    }),
    translation: Joi.string().min(1).max(255).required().messages({
      "any.required": "translation majburiy maydon",
      "string.min": "translation kamida 1 ta belgi bo'lishi kerak",
      "string.max": "translation 255 ta belgidan oshmasligi kerak",
    }),
  });

  return schemaTranslations.validate(body, { abortEarly: false });
};
