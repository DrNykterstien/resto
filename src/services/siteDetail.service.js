const SiteDetailModel = require('../models/siteDetail.model');
const { getOneOrCreate } = require('../utils/crud');

const createSiteDetail = detail => {
  try {
    return getOneOrCreate(SiteDetailModel, { ...detail });
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
  createSiteDetail
};
