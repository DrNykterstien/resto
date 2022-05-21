const { createEvent } = require('../services/event.service');

//** --------------------- API  --------------------- */

const createEventController = async (req, res) => {
  const input = req.body;
  const data = await createEvent(input);
  res.status(data.code).json(data);
};

module.exports = {
  createEventController
};
