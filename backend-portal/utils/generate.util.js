const jwt = require('jsonwebtoken');
const crypto = require('crypto');
module.exports.token = (user) => ({
	token: 'Bearer ' + jwt.sign({ ...JSON.parse(JSON.stringify(user)) }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRY }),
});

module.exports.code = x => crypto.randomBytes(x).toString('hex');

module.exports.password = length => crypto.randomBytes(length).toString('hex');

module.exports.prompt = productDetails => `You are an expert content writer who can write SEO optimized creative to post on social media for product marketing.

Write the 3 most amazing creative content for the following product/service and respond with in json format:

${JSON.stringify(productDetails).replace('{', '').replaceAll('"', '').replace('}', '').replace(',', '\n')}`