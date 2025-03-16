const Joi = require("joi");

exports.pronunciationValidation = (body) => {
  const schema = Joi.object({
    pronunciation_id: Joi.number().integer().positive().required().messages({
      "number.base": "Talaffuz ID raqam bo'lishi kerak",
      "number.integer": "Talaffuz ID butun son bo'lishi kerak",
      "number.positive": "Talaffuz ID musbat bo'lishi kerak",
      "any.required": "Talaffuz ID kiritilishi shart",
    }),

    word_id: Joi.number().integer().positive().required().messages({
      "number.base": "So'z ID raqam bo'lishi kerak",
      "number.integer": "So'z ID butun son bo'lishi kerak",
      "number.positive": "So'z ID musbat bo'lishi kerak",
      "any.required": "So'z ID kiritilishi shart",
    }),

    ipa_text: Joi.string().min(1).max(255).required().messages({
      "string.base": "IPA matni satr bo'lishi kerak",
      "string.empty": "IPA matni bo'sh bo'lishi mumkin emas",
      "string.min": "IPA matni kamida 1 ta belgi bo'lishi kerak",
      "string.max": "IPA matni 255 ta belgidan oshmasligi kerak",
      "any.required": "IPA matni kiritilishi shart",
    }),

    audio_file_path: Joi.string().uri().required().messages({
      "string.base": "Audio fayl yo'li satr bo'lishi kerak",
      "string.empty": "Audio fayl yo'li bo'sh bo'lishi mumkin emas",
      "string.uri": "Audio fayl yo'li to'g'ri URL formatida bo'lishi kerak",
      "any.required": "Audio fayl yo'li kiritilishi shart",
    }),

    created_at: Joi.date().timestamp().required().messages({
      "number.base": "Yaratilgan sana timestamp formatida bo'lishi kerak",
      "any.required": "Yaratilgan sana kiritilishi shart",
    }),

    created_by: Joi.number().integer().positive().required().messages({
      "number.base": "Yaratgan foydalanuvchi ID raqam bo'lishi kerak",
      "number.integer": "Yaratgan foydalanuvchi ID butun son bo'lishi kerak",
      "number.positive": "Yaratgan foydalanuvchi ID musbat bo'lishi kerak",
      "any.required": "Yaratgan foydalanuvchi ID kiritilishi shart",
    }),
  });

  return schema.validate(body);
};
