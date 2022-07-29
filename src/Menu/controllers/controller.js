const MenuService = require('../Services/menu.Service');

function itemExists(item, res) {
	if (!item) {
		return res.status(200).send({ message: 'item not found!' });
	}
}

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

	const newItem = await MenuService.createItem(item).catch((err) => {
		console.log(err.message);
	});

	res.status(201).send(item);
};

const updateItem = async (req, res) => {
	const id = req.params.id;
	const updatedItem = req.body;
	const item = await MenuService.findByIdCardapio(id);
	itemExists(item, res);

	const upItem = await MenuService.updateItem(id, updatedItem);

	res.send(upItem);
};

const deleteItem = async (req, res) => {
	const id = req.params.id;
	const item = await MenuService.findByIdCardapio(id);
	itemExists(item, res);

	await MenuService.deleteItem(id);
	res.send({ message: 'Item deleted sucessfully!' });
};

module.exports = {
	findAllMenuController,
	findByIdCardapioController,
	createItem,
	updateItem,
	deleteItem,
};
