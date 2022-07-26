const User = require('../models/User');

// User and email verification
const findByUserService = (user) => User.findOne({ user: user });
const findByEmailService = (email) => User.findOne({ email: email });

const createUserService = async (newUser) => await User.create(newUser);
const findAllUserService = async (req, res) => await User.find();
const findByIdUserService = async (idUser) => await User.findById(idUser);

module.exports = {
	findByUserService,
	findByEmailService,
	createUserService,
	findAllUserService,
	findByIdUserService,
};
