const routes = require('express').Router();
const User = require('../controller/user.controller');
const Check = require('../middlewares/user.middlewares');
const Token = require('../../Auth/middlewares/auth.middlewares');

routes.get('/AllUsers', Token, User.findAllUser);
routes.post('/Create', Check, User.createUser);

module.exports = routes;
