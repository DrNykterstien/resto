const { Router } = require('express');
const website = require('./website/index');

const router = Router();

router.use('/', website);

module.exports = router;
