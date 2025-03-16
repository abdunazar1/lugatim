const Joi = require("joi");

exports.partOfSpeechValidation = (body) => {
  const schema = Joi.object({
    part_of_speech_id: Joi.number().integer().positive().required().messages({
      "number.base": "Nutq qismi ID raqam bo'lishi kerak",
      "number.integer": "Nutq qismi ID butun son bo'lishi kerak",
      "number.positive": "Nutq qismi ID musbat bo'lishi kerak",
      "any.required": "Nutq qismi ID kiritilishi shart",
    }),

    name: Joi.string().min(2).max(100).required().messages({
      "string.base": "Nutq qismi nomi satr bo'lishi kerak",
      "string.empty": "Nutq qismi nomi bo'sh bo'lishi mumkin emas",
      "string.min": "Nutq qismi nomi kamida 2 ta belgi bo'lishi kerak",
      "string.max": "Nutq qismi nomi 100 ta belgidan oshmasligi kerak",
      "any.required": "Nutq qismi nomi kiritilishi shart",
    }),

    abbreviation: Joi.string().min(1).max(10).required().messages({
      "string.base": "Nutq qismining qisqartmasi satr bo'lishi kerak",
      "string.empty": "Nutq qismining qisqartmasi bo'sh bo'lishi mumkin emas",
      "string.min": "Nutq qismining qisqartmasi kamida 1 ta belgi bo'lishi kerak",
      "string.max": "Nutq qismining qisqartmasi 10 ta belgidan oshmasligi kerak",
      "any.required": "Nutq qismining qisqartmasi kiritilishi shart",
    }),

    description: Joi.string().min(5).max(500).required().messages({
      "string.base": "Nutq qismi ta'rifi satr bo'lishi kerak",
      "string.empty": "Nutq qismi ta'rifi bo'sh bo'lishi mumkin emas",
      "string.min": "Nutq qismi ta'rifi kamida 5 ta belgi bo'lishi kerak",
      "string.max": "Nutq qismi ta'rifi 500 ta belgidan oshmasligi kerak",
      "any.required": "Nutq qismi ta'rifi kiritilishi shart",
    }),
  });

  return schema.validate(body);
};
