const router = require('express').Router();
const passport = require('passport');
const allowOnly = require('../middlewares/auth.guard');
const controller = require('../controllers/log.controller');

const apiAuth = passport.authenticate('jwt', { session: false });

router
	.get('/', apiAuth, allowOnly(['admin']), controller.getLog)

module.exports = router;