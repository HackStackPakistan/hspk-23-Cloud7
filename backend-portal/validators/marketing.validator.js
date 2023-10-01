const J = require('joi');

const init = J.object({
	productName: J.string().max(32).required(),
	productDescription: J.string().max(300).required(),
	productCategory: J.string().max(30).required(),
	minAgeOfAudience: J.number().min(0),
	maxAgeOfAudience: J.number().max(100)
});

module.exports = { init }