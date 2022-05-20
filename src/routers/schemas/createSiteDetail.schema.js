const Joi = require('joi');

const createSiteDetailSchema = Joi.object().keys({
  about: Joi.string().trim().min(2).max(500).required(),
  address: Joi.string().trim().min(2).max(100).required(),
  email: Joi.string().trim().email().required(),
  phone: Joi.string().trim().required(),
  facebookLink: Joi.string().trim().required(),
  twitterLink: Joi.string().trim().required(),
  instagramLink: Joi.string().trim().required(),
  developerLink: Joi.string().trim().required()
});

module.exports = createSiteDetailSchema;
