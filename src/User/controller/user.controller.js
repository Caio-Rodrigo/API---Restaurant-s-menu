const Service = require('../service/user.service');

const findAllUser = async (req, res) => {
	const allUser = await Service.findAllUserService();
	try {
		if (allUser.length === 0) {
			return res.status(200).send({ message: 'No users found' });
		}
		res.send(allUser);
	} catch (err) {
		res.status(500).send({ error: err.message });
	}
};

const createUser = async (req, res) => {
	const User = req.body;
	const { user, email } = req.body;

	const newUser = await Service.createUserService(User).catch((err) => {
		console.log(err.message);
	});

	const foundUser = await Service.findByUserService(user);
	if (foundUser) {
		return res.status(400).send({ message: 'User already registered!' });
	}

	const foundEmail = await Service.findByEmailService(email);
	if (foundEmail) {
		return res.status(400).send({ message: 'Email already registered!' });
	}

	if (!newUser) {
		return res.status(500).send({ error: 'Error creating User' });
	}

	res.status(201).send(newUser);
};

module.exports = {
	findAllUser,
	createUser,
};
