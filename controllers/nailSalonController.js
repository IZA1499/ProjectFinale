const router = require('express').Router();
const nailSalonService = require('../service/nailSalonService');
const { getErrorMessage } = require('../utilities/errorUtilities');

router.get('/', async (req, res) => {
  try {
    const nailSalon = await nailSalonService.getAll().lean();
    //const signUpUsers = gemstone.signUplist.map(user => user.username);
    ////const isOwner = gemstone.owner == req.user._id;
    //const isSigned = gemstone.signUplist.some(user => user._id == req.user._id);

    res.render('views/home', { ...views, signUpUsers, isOwner, isSigned });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/views/details/:nailSalonId', async (req, res) => {
  try {
    //const nailSalon = await nailSalonService.getOne(req.params.nailSalonId).lean();
    //res.render('views/details', { ...nailSalon });
  } catch (err) {
    console.error(err);
    res.status(500).send('Username or Password missmatch');
  }
});

router.get('/create', (req, res) => {
  res.render('views/create');
});

router.post('/create', async (req, res) => {
  const nailSalonData = req.body;

  try {
    await nailSalonService.create(req.user._id, nailSalonData);
    res.redirect('/views');
  } catch (err) {
    console.error(err);
    res.render('views/create', { ...nailSalonData, error: getErrorMessage(err) });
  }
});

router.get('/:nailSalonId/delete', async (req, res) => {
  try {
    await nailSalonService.delete(req.params.nailSalonId);
    res.redirect('/views');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.get('/:nailSalonId/edit', async (req, res) => {
  try {
    const nailSalon = await nailSalonService.getOne(req.params.nailSalonId).lean();
    if (nailSalon.owner != req.user?._id) {
      return res.redirect(`/views/details/${req.params.nailSalonId}`);
    }
    req.nailSalon = nailSalon;
    next();
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;