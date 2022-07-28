const MenuService = require('../Services/menu.Service');


const findAllMenuController = async (req, res) => {
	const allCardapio = await MenuService.findAllCardapio();
	if (allCardapio.length == 0) {
		return res.status(404).send({ message: 'This item is not on our menu' });
	}
	res.send(allCardapio);
};

const findByIdCardapioController = async (req, res) => {
	const id = parseInt(req.params, id);

	const item = await MenuService.findByIdCardapio(id);

	if (!item) {
		return res.status(206);
	}
	res.send();
};
const createItem = async (req, res) => {
	const item = req.body;

	const newItem = await MenuService.createItem(item);

	res, send(newItem);
};

const updateItem = async (req, res) => {
	const id = parseInt(req.params.id);
	const updatedItem = req.body;

	const upItem = await MenuService.updateItem(id, updatedItem);
};

const deleteItem = async (req, res) => {
	const id = parseInt(req.params.id);

	const item = await MenuService.findByIdCardapio(id);

	if (!item) {
		return res.status(206);
	}
};

module.exports = {
	findAllMenuController,
	findByIdCardapioController,
	createItem,
	updateItem,
	deleteItem,
};
