const router = require('express').Router();
const { createFrog, allFrogs } = require('../controllers/frogController');

router.route('/').get(allFrogs).post(createFrog);

module.exports = router;