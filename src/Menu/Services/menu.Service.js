const Cardapio = require('../models/Cardapio');

const findAllCardapio = async (req, res) => {
	const Itens = await Cardapio.find();
	return Itens;
};

const findByIdCardapio = async (id) => {
	return await Cardapio.findById(id);
};

const createItem = async (newItem) => {
	await Cardapio.create(newItem);
};

const updateItem = async (id, editItem) =>
	await Cardapio.findByIdAndUpdate(id, editItem).setOptions({
		returnOriginal: false,
	});

const deleteItem = async (id) => await Cardapio.findBYIdAndDelete(id);

module.exports = {
	findAllCardapio,
	findByIdCardapio,
	createItem,
	deleteItem,
	updateItem,
};
