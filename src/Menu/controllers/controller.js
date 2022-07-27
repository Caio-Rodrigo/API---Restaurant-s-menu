const MenuService = require("../Services/menu.Service");
const mongoose = require("mongoose");

const findAllMenuController = async (req, res) => {
  const allCardapio = await MenuService.findAllCardapio();
  if (allCardapio.length == 0) {
    return res
      .status(404)
      .send({ message: "Esse item não está em nosso cardapio" });
  }
  res.send(allCardapio);
};

const findByIdCardapioController = async (req, res) => {
  const id = parseInt(req.params, id);

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: "ID invalido",
    });
  }

  const item = await MenuService.findByIdCardapio(id);

  if (!item) {
    return res.status(206);
  }
  res.send();
};
const createItem = async (req, res) => {
  const item = req.body;

  if (!item.nome || item.valor || item.url) {
    return res.status(400).send({
      message:
        "Você não preencheu todos os campos para fazer a ediçãodesse item",
    });
  }

  const newItem = await MenuService.createItem(item);

  res, send(newItem);
};

const updateItem = async (req, res) => {
  const id = parseInt(req.params.id);
  const updatedItem = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) 
  {
    return res.status(400).send({
      message: "ID invalido",
    });
  }

  const upItem = await (MenuService.updateItem(id, updatedItem));
};

const deleteItem = async (req, res) => {
    const id = parseInt(req.params.id);

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({
            message: 'ID invalido'
        });

        const item = await MenuService.findByIdCardapio(id);

        if (!item) {
            return res.status(206);
        }
    }
};

module.exports = {
    findAllMenuController,
    findByIdCardapioController,
    createItem,
    updateItem,
    deleteItem
};
