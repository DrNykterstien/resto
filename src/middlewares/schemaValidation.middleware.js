const schemaValidationMiddleware = (schema, property) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req[property], {
      abortEarly: false,
      stripUnknown: true
    });
    if (error == null) {
      req[property] = value;
      next();
    } else {
      const { details } = error;
      const message = details.map(i => i.message).join(',');

      res.status(400).json({ data: null, success: false, code: 400, message });
    }
  };
};

module.exports = schemaValidationMiddleware;
