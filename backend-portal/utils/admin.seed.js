const User = require('../models/User');

module.exports = async () => await User.create({
	fullName: 'Admin',
	email: 'admin@admin.com',
	role: 'admin',
	password: 'admin'
});