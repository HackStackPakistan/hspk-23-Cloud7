const User = require('../models/User');
const VConfig = require('../validators/config.validator')

module.exports.getConfig = async (req, res) => {
	try {
		res.json({ status: 200, data: req.user.config });

	} catch (e) {
		console.log("ERROR: ", e);
		return res.status(400).json({ status: 400, data: e.message });
	}
}

module.exports.updateConfig = async (req, res) => {
	const userId = req.user._id;
	try {
		const { error, value } = VConfig.init.validate(req.body);
		if (error) throw new Error(error);

		await User.findByIdAndUpdate(userId, { config: value })
		res.json({ status: 200 });
	}
	catch (e) {
		console.log("ERROR: ", e);
		return res.status(400).json({ status: 400, data: e.message });
	}
}