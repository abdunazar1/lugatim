const Joi = require("joi");

exports.definitionValidation = (body) => {
  const schema = Joi.object({
    definition_id: Joi.number().integer().positive().required().messages({
      "number.base": "Ta'rif ID raqam bo'lishi kerak",
      "number.integer": "Ta'rif ID butun son bo'lishi kerak",
      "number.positive": "Ta'rif ID musbat bo'lishi kerak",
      "any.required": "Ta'rif ID kiritilishi shart",
    }),

    word_id: Joi.number().integer().positive().required().messages({
      "number.base": "So'z ID raqam bo'lishi kerak",
      "number.integer": "So'z ID butun son bo'lishi kerak",
      "number.positive": "So'z ID musbat bo'lishi kerak",
      "any.required": "So'z ID kiritilishi shart",
    }),

    definition_text: Joi.string().min(3).max(1000).required().messages({
      "string.base": "Ta'rif matni satr bo'lishi kerak",
      "string.empty": "Ta'rif matni bo'sh bo'lishi mumkin emas",
      "string.min": "Ta'rif matni kamida 3 ta belgi bo'lishi kerak",
      "string.max": "Ta'rif matni 1000 ta belgidan oshmasligi kerak",
      "any.required": "Ta'rif matni kiritilishi shart",
    }),

    part_of_speech_id: Joi.number().integer().positive().required().messages({
      "number.base": "So'z turkumi ID raqam bo'lishi kerak",
      "number.integer": "So'z turkumi ID butun son bo'lishi kerak",
      "number.positive": "So'z turkumi ID musbat bo'lishi kerak",
      "any.required": "So'z turkumi ID kiritilishi shart",
    }),

    definition_order: Joi.number().integer().min(1).required().messages({
      "number.base": "Tartib raqami raqam bo'lishi kerak",
      "number.integer": "Tartib raqami butun son bo'lishi kerak",
      "number.min": "Tartib raqami kamida 1 bo'lishi kerak",
      "any.required": "Tartib raqami kiritilishi shart",
    }),

    created_at: Joi.date().iso().default(() => new Date(), "Yaratilgan sana").messages({
      "date.base": "Yaratilgan sana to'g'ri sana formatida bo'lishi kerak",
    }),

    update_at: Joi.date().iso().default(() => new Date(), "Yangilangan sana").messages({
      "date.base": "Yangilangan sana to'g'ri sana formatida bo'lishi kerak",
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
