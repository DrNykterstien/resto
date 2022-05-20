const { Router } = require('express');
const {
  getHomeRenderingController,
  createTableReservationRenderingController
} = require('../../controllers/website.controller');

const router = Router();

router.route('/').get(getHomeRenderingController);

router.route('/table').post(createTableReservationRenderingController);

module.exports = router;
