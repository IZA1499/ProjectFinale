const router = require('express').Router();
const authService = require('../service/authService');

router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', (req, res) => {
    const userData = req.body;
    res.redirect('/auth/register');
});

router.get('/login', isGuest, (req, res) => {
    res.render('auth/login');
});

router.post('/login', (req, res) => {
    const loginData = req.body;
});

function isValidPassword(password) {
    let isValid = true;
    if (!password) {
        isValid = false;
    }
    return isValid;
}

router.post('/register', (req, res) => {
    if (!isValidPassword(req.body.password)) {
        return res.status(404).send('Password does not match');
    }
    res.redirect('/register');
});

router.get('/logout', (req, res) => {
    res.redirect('/');
});

module.exports = router;