const jwt = require('jsonwebtoken');
const crypto = require('crypto');
module.exports.token = (user) => ({
	token: 'Bearer ' + jwt.sign({ ...JSON.parse(JSON.stringify(user)) }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRY }),
});

module.exports.code = x => crypto.randomBytes(x).toString('hex');

module.exports.password = length => crypto.randomBytes(length).toString('hex');