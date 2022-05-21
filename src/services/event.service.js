const EventModel = require('../models/event.model');
const { createOne } = require('../utils/crud');

const createEvent = event => {
  try {
    return createOne(EventModel, { ...event });
  } catch {
    return {
      data: null,
      success: false,
      code: 500,
      message: 'Internal Server Error'
    };
  }
};

module.exports = {
  createEvent
};
