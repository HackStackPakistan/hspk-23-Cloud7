const router = require('express').Router();
const passport = require('passport');
const allowOnly = require('../middlewares/auth.guard');
const controller = require('../controllers/marketing.controller');

const apiAuth = passport.authenticate('jwt', { session: false });

router
	.post('/', apiAuth, allowOnly(['user']), controller.askPalm)

module.exports = router;