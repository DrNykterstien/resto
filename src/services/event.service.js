const EventModel = require('../models/event.model');
const { createOne, getMany } = require('../utils/crud');

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

const getEvents = () => {
  try {
    return getMany(EventModel);
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
  createEvent,
  getEvents
};
