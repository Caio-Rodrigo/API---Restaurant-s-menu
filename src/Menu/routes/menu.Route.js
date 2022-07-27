const express = require('express');

const controller = require('../controllers/controller');

const route = require('express').Router();

route.get('/allItens', controller.findAllMenuController);

route.get('/itens/:id', controller.findByIdCardapioController);

route.post('/createItem', controller.createItem);

route.put('/updateItem/:id', controller.updateItem);

route.delete('/deleteItem/:id', controller.deleteItem);

module.exports = route;