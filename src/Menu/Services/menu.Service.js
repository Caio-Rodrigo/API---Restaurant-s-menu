const Cardapio = require('../models/Cardapio');

const findAllCardapio = async (req, res) => {
	const Itens = await Cardapio.find();
	return Itens;
};

const findById = async (id) => await Cardapio.findById(id);

const createItem = async (newItem) => await Cardapio.create(newItem);

const updateItem = async (id, editItem) =>
	await Cardapio.findByIdAndUpdate(id, editItem).setOptions({
		returnOriginal: false,
	});

const deleteItem = async (id) => await Cardapio.findByIdAndDelete(id);

module.exports = {
	findAllCardapio,
	findById,
	createItem,
	deleteItem,
	updateItem,
};
