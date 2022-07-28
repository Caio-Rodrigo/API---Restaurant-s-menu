require('dotenv').config();
const mongoose = require('mongoose');

const validId = (req, res, next) => {
	const id = req.params.id;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(400).send({ message: 'Invalid Id' });
	}

	next();
};

const validObjectBody = (req, res, next) => {
	const item = req.body;

	if (!item.name && !item.description && !item.url) {
		return res.status(400).send({ message: 'Fill in all fields!' });
	}

	if (!item.name) {
		return res.status(400).send({ message: 'Fill in the name field!' });
	}

	if (!item.description) {
		return res.status(400).send({ message: 'Fill in the description field!' });
	}

	if (!item.url) {
		return res.status(400).send({ message: 'Fill in the URL field!' });
	}

	next();
};

module.exports = {
	validId,
	validObjectBody,
};
