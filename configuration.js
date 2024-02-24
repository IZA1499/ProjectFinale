const authController = require('./controllers/authController');

router.use(homeController);
router.use('/auth', authController);

router.all('*', (req,res) => {
    res.render('404');
})

module.exports = router;