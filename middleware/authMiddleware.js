const jwt = require('../library/jsonwebtoken');
const { hashedPass } = require('../configuration');

exports.authMiddleware = async (req, res, next) => {
    const token = req.cookies['auth'];

    if (!token) {
        return next(); 
    }

    try {
        const decodedToken = await jwt.verify(token, hashedPass);

        req.user = decodedToken;
        res.locals.user = decodedToken;

        next(); 
    } catch (err) {
        res.clearCookie('auth');
        res.redirect('/auth/login');
    }
};
const jwt = require('../library/jsonwebtoken');
const { hashedPass } = require('../configuration');

exports.authMiddleware = async (req, res, next) => {
   };
const { authMiddleware } = require('./middleware');



const express = require('express');
const router = express.Router();
const { authMiddleware } = require('./middleware');


router.get('/middleware', authMiddleware, (req, res) => {
   c
});


module.exports = decodedToken;
