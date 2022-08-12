const controller = require('../controllers/controller');
const { validId, validObjectBody } = require('../middlewares/menu.middlewares');
const Token = require('../../Auth/middlewares/auth.middlewares');
const route = require('express').Router();

route.get('/allItens', controller.findAllMenuController);
route.get('/itens/:id', validId, controller.findByIdCardapioController);
route.post('/createItem', validObjectBody, controller.createItem);
route.put('/updateItem/:id', Token, validId, controller.updateItem);
route.delete('/deleteItem/:id', Token, validId, controller.deleteItem);

module.exports = route;
