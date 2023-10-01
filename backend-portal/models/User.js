const bcrypt = require('bcrypt')
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	fullName: String,
	email: String,
	password: {
		type: String,
		select: false
	},
	role: {
		type: String,
		enum: ['admin', 'user']
	},
	isSuspended: {
		type: Boolean,
		default: false
	},
	config: {
		type: {
			url: String,
			apiKey: String,
			secretKey: String
		},
		default: null
	}
}, {
	timestamps: true
});

userSchema.pre('save', function(next) {
	if (this.isModified('password')) this.password = bcrypt.hashSync(this.password, 10);
	next();
});

userSchema.pre(['updateOne', 'findOneAndUpdate'], function(next) {
	const updateObj = this.getUpdate();
	if (updateObj.password) this._update.password = bcrypt.hashSync(updateObj.password, 10);
	next();
});

userSchema.methods.isPasswordCorrect = function(password) {
	const isMatch = bcrypt.compareSync(password, this.password);
	return isMatch;
};

module.exports = mongoose.model('user', userSchema);