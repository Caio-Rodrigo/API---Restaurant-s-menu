const { updateItem } = require('../controllers/controller');
const Cardapio = require ('../models/Cardapio')

const findAllCardapio = async (req, res) => {
    const Itens = await Cardapio.find();
    return Itens;
};

const findByIdCardapio = async (id) => {
    return await Cardapio.findById (id);
};

const createItem = async (id, editItem) => await Cardapio.fin (id, editItem).setOptions({
    returnOriginal:
    false
});

const updateItem = async (id, editItem) => await Cardapio.find (id, editItem).setOptions({
    returnOriginal: false
});

const deleteItem = async (id) => await Cardapio.findBYIdAndDelete(id);

module.exports = {
    findAllCardapio,
    findByIdCardapio,
    createItem,
    deleteItem,
    updateItem,
};