const Joi = require('joi');

const createEventSchema = Joi.object().keys({
  detail: Joi.string().trim().min(2).max(500).required(),
  title: Joi.string().trim().min(2).max(100).required(),
  handledAt: Joi.date().min('now').required()
});

module.exports = createEventSchema;
