const { createSiteDetail } = require('../services/siteDetail.service');

//** --------------------- API  --------------------- */

const createSiteDetailController = async (req, res) => {
  const input = req.body;
  const data = await createSiteDetail(input);
  res.status(data.code).json(data);
};

module.exports = {
  createSiteDetailController
};
