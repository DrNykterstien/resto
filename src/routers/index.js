const { Router } = require('express');
const website = require('./website/index');
const api = require('./api/index');

const router = Router();

router.use('/', website);
router.use('/api/', api);

module.exports = router;
