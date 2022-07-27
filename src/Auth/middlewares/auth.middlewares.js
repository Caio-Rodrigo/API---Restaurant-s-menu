require('dotenv').config();
const jwt = require('jsonwebtoken');
const { findByIdUserService } = require('../../User/service/user.service');

module.exports = (req, res, next) => {
	const authHeader = req.headers.authorization;

	if (!authHeader) {
		return res.status(401).send({ error: 'Token not reported!' });
	}

	const parts = authHeader.split(' ');

	if (parts.length !== 2) {
		return res.status(401).send({ error: 'Invalid Token!' });
	}

	const [scheme, token] = parts;

	if (!/^Bearer$/i.test(scheme)) {
		return res.status(401).send({ error: 'Malformed token!' });
	}

	jwt.verify(token, process.env.SECRET, async (err, decoded) => {
		const user = await findByIdUserService(decoded.id);

		if (err || !user || !user.id) {
			return res.status(401).send({ error: 'Invalid Token!' });
		}

		req.userId = user.id;

		return next();
	});
};
