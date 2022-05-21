const Joi = require('joi');

const createTableReservationSchema = Joi.object().keys({
  fullName: Joi.string().trim().min(2).max(50).required(),
  email: Joi.string().trim().email().required(),
  occation: Joi.string()
    .trim()
    .valid(...['wedding', 'birthday', 'other'])
    .required(),
  handledAt: Joi.date().min('now').required(),
  message: Joi.string().trim().min(5).max(500).required()
});

module.exports = createTableReservationSchema;
