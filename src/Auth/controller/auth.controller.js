const Service = require('../service/auth.service');
const bcrypt = require('bcrypt');

const authUser = async (req, res) => {
	const { user, email, password } = req.body;

	const User = await Service.findByAuthUserService(user);
	const Email = await Service.findByAuthEmailService(email);
	const auth = User || Email;

	if (!auth) {
		return res.status(400).send({ message: 'User not found!' });
	}

	const PasswordValid = await bcrypt.compare(password, auth.password);

	if (!PasswordValid) {
		return res.status(406).send({ message: 'invalid password' });
	}

	const token = Service.generateToken(auth._id);

	res.send({ token });
};

module.exports = { authUser };
