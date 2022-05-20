const schemaValidation = (schema, data) => {
  const { error, value } = schema.validate(data, {
    abortEarly: false,
    stripUnknown: true
  });

  if (error == null) {
    return value;
  } else {
    const { details } = error;
    const message = details.map(i => i.message).join(',');

    return { data: null, success: false, code: 400, message };
  }
};

module.exports = schemaValidation;
