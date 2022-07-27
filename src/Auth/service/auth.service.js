const User = require('../../User/models/User');
const jwt = require('jsonwebtoken');

const findByAuthEmailService = (email) =>
	User.findOne({ email: email }).select('password');

const findByAuthUserService = (user) =>
	User.findOne({ user: user }).select('password');

const generateToken = (userId) => {
	return jwt.sign({ id: userId }, process.env.SECRET, { expiresIn: '24h' });
};

module.exports = {
	findByAuthEmailService,
	findByAuthUserService,
	generateToken,
};
