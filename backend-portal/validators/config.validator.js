const J = require('joi');

const init = J.object({
	url: J.string().uri().max(200).required(),
	apiKey: J.string().max(200).required(),
	secretKey: J.string().max(200).required()
});

module.exports = { init }