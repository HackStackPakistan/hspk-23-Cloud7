const router = require('express').Router();
const controller = require('../controllers/user.controller')

router
	.post('/login', controller.login)
	.use('/users', require('./users'))
	.use('/config', require('./config'))
	.use('/marketing', require('./marketing'))

module.exports = router;