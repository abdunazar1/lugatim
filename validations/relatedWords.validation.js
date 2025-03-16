const Joi = require("joi");

exports.relatedWordsValidation = (body) => {
  const schemaRelatedWords = Joi.object({
    word_id: Joi.string().hex().length(24).required().messages({
      "any.required": "word_id majburiy maydon",
    }),
    related_word_id: Joi.string().hex().length(24).required().messages({
      "any.required": "related_word_id majburiy maydon",
    }),
    relation_type: Joi.string().hex().length(24).required().messages({
      "any.required": "relation_type majburiy maydon",
    }),
  });

  return schemaRelatedWords.validate(body, { abortEarly: false });
};
