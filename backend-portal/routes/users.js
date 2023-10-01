const router = require('express').Router();
const passport = require('passport');
const allowOnly = require('../middlewares/auth.guard');
const controller = require('../controllers/user.controller');

const apiAuth = passport.authenticate('jwt', { session: false });

router
	.get('/', apiAuth, allowOnly(['admin']), controller.listUser_get)
	.put('/', apiAuth, allowOnly(['admin']), controller.updateUser_put)
	.put('/suspend/:id', apiAuth, allowOnly(['admin']), controller.suspendClient_put)
	.post('/', apiAuth, allowOnly(['admin']), controller.createUser_post)
	.delete('/:id', apiAuth, allowOnly(['admin']), controller.deleteUser_del)

module.exports = router;
