const Joi = require('joi');

exports.wordsValidation = (body) =>{
    const schemaWord = Joi.object({
        word: Joi.string()
        .min(2)
        .message("So'z 2ta harfdan kam bo'lmasligi kerak")
        .max(100)
        .message("So'z 100ta harfdan uzun bo'lmasligi kerak")
        .required()
        .messages({
          "string.empty":"So'z bo'sh bo'lishi mumkin emas",
          "any.required":"So'zni kiriting",
        }),
      });
      return schemaWord.validate(body)
}