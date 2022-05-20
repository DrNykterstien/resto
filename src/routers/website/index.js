const { Router } = require('express');
const {
  getHomeRenderingController
} = require('../../controllers/website.controller');

const router = Router();

router.route('/').get(getHomeRenderingController);

module.exports = router;
