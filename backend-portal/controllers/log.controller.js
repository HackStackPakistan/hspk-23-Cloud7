const Log = require('../models/Log');

module.exports.getLog = async (req, res) => {
	try {
		const logs = await Log.find().populate('user').sort({ createdAt: -1 })
		res.json({ status: 200, data: logs });

	} catch (e) {
		console.log("ERROR: ", e);
		return res.status(400).json({ status: 400, data: e.message });
	}
}