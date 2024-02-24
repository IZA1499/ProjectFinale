const router = require('express').Router();

const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');
const nailSalonController = require('./controllers/nailSalonController');

router.use('/', homeController);
router.use('/auth', authController);
router.use('/nailSalon', nailSalonController);


module.exports = router;