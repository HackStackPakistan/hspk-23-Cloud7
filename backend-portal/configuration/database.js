const mongoose = require('mongoose');
const User = require('../models/User');
const seedAdmin = require('../utils/admin.seed');

module.exports.connect = () => new Promise(async (res, rej) => {
	try {
		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
			useCreateIndex: true
		});
		console.log("CONFIG: Database Connected");

		const admin = await User.findOne({ role: 'admin' });
		if (!admin) {
			await seedAdmin();
			console.log("CONFIG: Created Admin");
		}
		res();
	}
	catch (e) {
		console.log("E-CONFIG: Database Error, ", e);
		rej(e);
	}
})