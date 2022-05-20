const createTableReservationSchema = require('../routers/schemas/createTable.schema');
const { createTableReservation } = require('../services/table.service');
const schemaValidation = require('../utils/schemaValidation');

const getHomeRenderingController = async (req, res) => {
  res.render('pages/website/home');
};

const createTableReservationRenderingController = async (req, res) => {
  const input = schemaValidation(createTableReservationSchema, req.body);
  if (input.code === 400) return res.render('pages/website/home');
  const data = await createTableReservation(input);
  if (data.code === 400 || data.code === 500)
    return res.render('pages/website/home');
  return res.render('pages/website/home');
};

module.exports = {
  createTableReservationRenderingController,
  getHomeRenderingController
};
