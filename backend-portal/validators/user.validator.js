const J = require('joi');

const init = J.object({
	fullName: J.string().required(),
	password: J.string().min(6).required(),
	email: J.string().email().required(),
	role: J.string().allow('admin', 'user')
});

const update = J.object({
	fullName: J.string(),
	email: J.string().email()
});

const updateAdmin = J.object({
	fullName: J.string(),
	email: J.string().email(),
	password: J.string().min(6).empty(''),
});

const changePass = J.object({
	password: J.string().min(6),
	confirm: J.ref('password'),
});

const forgotPassword = J.object({
	email: J.string().email().required()
});

const forgotVerify = J.object({
	email: J.string().email().required(),
	code: J.string().length(6).required()
});

const forgotChange = J.object({
	user: J.string().required(),
	code: J.string().length(6).required(),
	password: J.string().min(6),
	confirm: J.ref('password'),
})

module.exports = { init, update, updateAdmin, changePass, forgotPassword, forgotVerify, forgotChange }