const router = require('express').Router();
const passport = require('passport');
const allowOnly = require('../middlewares/auth.guard');
const controller = require('../controllers/config.controller');

const apiAuth = passport.authenticate('jwt', { session: false });

router
	.get('/', apiAuth, allowOnly(['user']), controller.getConfig)
	.put('/', apiAuth, allowOnly(['user']), controller.updateConfig);

module.exports = router;