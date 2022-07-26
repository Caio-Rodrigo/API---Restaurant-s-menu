const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = mongoose.Schema;

const userSchema = new User({
	user: { type: string, required: true, index: { unique: true } },
	userName: { type: string, required: true },
	email: { type: string, required: true, index: { unique: true } },
	password: { type: string, required: true },
	avatar: { type: string, required: true },
});

userSchema.pre('save', async function (next) {
	this.password = await bcrypt.hash(this.password, 12);
	next();
});

const user = mongoose.model('User', userSchema, 'users');

module.exports = user;
