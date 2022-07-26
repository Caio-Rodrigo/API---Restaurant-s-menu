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

module.exports = {
    findAllUser
}
