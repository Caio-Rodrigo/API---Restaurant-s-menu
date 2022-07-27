const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = mongoose.Schema;

const userSchema = new User({
	user: { type: String, required: true, index: { unique: true } },
	userName: { type: String, required: true },
	email: { type: String, required: true, index: { unique: true } },
	password: { type: String, required: true },
	avatar: { type: String, required: false },
});

userSchema.pre('save', async function (next) {
	this.password = await bcrypt.hash(this.password, 12);
	next();
});

const user = mongoose.model('User', userSchema, 'users');

module.exports = user;
