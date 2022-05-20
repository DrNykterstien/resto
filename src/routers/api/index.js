const { Router } = require('express');
const {
  createTableReservationController
} = require('../../controllers/table.controller');
const schemaValidationMiddleware = require('../../middlewares/schemaValidation.middleware');
const createTableReservationSchema = require('../schemas/createTable.schema');
const createSiteDetailSchema = require('../schemas/createSiteDetail.schema');
const {
  createSiteDetailController
} = require('../../controllers/siteDetail.controller');

const router = Router();

router
  .route('/table')
  .post(
    schemaValidationMiddleware(createTableReservationSchema, 'body'),
    createTableReservationController
  );

router
  .route('/siteDetail')
  .post(
    schemaValidationMiddleware(createSiteDetailSchema, 'body'),
    createSiteDetailController
  );

module.exports = router;
