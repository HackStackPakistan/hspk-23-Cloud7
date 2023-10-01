const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
	userQuery: Object,
	response: Object,
	user: {
		type: mongoose.SchemaTypes.ObjectId,
		ref: 'user'
	}
}, {
	timestamps: true
});

module.exports = mongoose.model('palm-log', logSchema);