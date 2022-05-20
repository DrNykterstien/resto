const { Router } = require('express');
const {
  createTableReservationController
} = require('../../controllers/table.controller');
const schemaValidationMiddleware = require('../../middlewares/schemaValidation.middleware');
const createTableReservationSchema = require('../schemas/createTable.schema');

const router = Router();

router
  .route('/table')
  .post(
    schemaValidationMiddleware(createTableReservationSchema, 'body'),
    createTableReservationController
  );

module.exports = router;
