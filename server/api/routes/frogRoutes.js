const router = require('express').Router();
const { createFrog } = require('../controllers/frogController');

router.route('/').post(createFrog);

module.exports = router;