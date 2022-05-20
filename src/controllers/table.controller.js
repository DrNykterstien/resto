const { createTableReservation } = require('../services/table.service');

//** --------------------- API  --------------------- */

const createTableReservationController = async (req, res) => {
  const input = req.body;
  const data = await createTableReservation(input);
  res.status(data.code).json(data);
};

module.exports = {
  createTableReservationController
};
