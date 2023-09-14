const router = require('express').Router();
const exampleRoutes = require('./exampleRoutes');
const frogRoutes = require('./frogRoutes');
const userRoutes = require('./userRoutes');

router.use('/examples', exampleRoutes);
router.use('/frogs', frogRoutes);
router.use('/user', userRoutes);

module.exports = router;