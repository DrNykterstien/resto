const createTableReservationSchema = require('../routers/schemas/createTable.schema');
const { getSiteDetail } = require('../services/siteDetail.service');
const { createTableReservation } = require('../services/table.service');
const schemaValidation = require('../utils/schemaValidation');

//** --------------------- WEBSITE  --------------------- */

const getHomeRenderingController = async (req, res) => {
  const { data } = await getSiteDetail();
  res.render('pages/website/home', { ...data });
};

const createTableReservationRenderingController = async (req, res) => {
  const input = schemaValidation(createTableReservationSchema, req.body);
  if (input.code === 400)
    return res.render('pages/empty', {
      message: input.message,
      layout: './layouts/failure-website'
    });
  const data = await createTableReservation(input);
  if (data.code === 400 || data.code === 500)
    return res.render('pages/empty', {
      message: data.message,
      layout: './layouts/failure-website'
    });
  return res.render('pages/empty', { layout: './layouts/success-website' });
};

module.exports = {
  createTableReservationRenderingController,
  getHomeRenderingController
};
