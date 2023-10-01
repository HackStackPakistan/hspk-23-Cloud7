const passport = require('passport');
const User = require('../models/User');
const VUser = require('../validators/user.validator')
const generate = require('../utils/generate.util');

module.exports.login = (req, res) => {
	passport.authenticate('local', { session: false }, (err, user, info) => {
		if (!user) return res.status(401).json({ status: 401, data: info })
		req.logIn(user, (err) => res.json({ status: 200, data: generate.token(user) }))
	})(req, res);
}

module.exports.listUser_get = async (req, res) => {
	try {
		const users = await User.find().lean();
		res.json({ status: 200, data: users });
	}
	catch (e) {
		console.log("ERROR: ", e);
		return res.status(400).json({ status: 400, data: e.message });
	}
}

module.exports.createUser_post = async (req, res) => {
	try {
		const { error, value } = VUser.init.validate(req.body);
		if (error) throw new Error(error);

		const newUser = new User(value);
		newUser.save();
		res.json({ status: 200, data: newUser })
	}
	catch (e) {
		console.log("ERROR: ", e);
		return res.status(400).json({ status: 400, data: e.message });
	}
}

module.exports.suspendClient_put = async (req, res) => {
	try {
		const { id } = req.params;

		await User.findByIdAndUpdate(id, { isSuspended: true }, { new: true, lean: true });

		const agents = await User.find({ agentOf: id }).lean();
		for (let i = 0; i < agents.length; i++)
			await User.findByIdAndUpdate(agents[i]._id, { isSuspended: true });

		res.json({ status: 200 });
	}
	catch (e) {
		console.log("ERROR: ", e);
		return res.status(400).json({ status: 400, data: e.message });
	}
}

module.exports.updateUser_put = async (req, res) => {
	const { id, ...body } = req.body;
	try {
		const { error, value } = VUser.update.validate(body);
		if (error) throw new Error(error);

		const oldUser = await User.findById(id);
		if (!oldUser) throw new Error("Invalid id")

		const updatedUser = await User.findByIdAndUpdate(id, value, { new: true }).lean();
		res.json({ status: 200, data: updatedUser })
	}
	catch (e) {
		console.log("ERROR: ", e);
		return res.status(400).json({ status: 400, data: e.message });
	}
}

module.exports.deleteUser_del = async (req, res) => {
	const { id } = req.params;
	try {
		const ids = id.split(',');
		await User.deleteMany({ _id: { $in: ids } });
		res.json({ status: 200 })
	}
	catch (e) {
		console.log("ERROR: ", e);
		return res.status(400).json({ status: 400, data: e.message });
	}
}