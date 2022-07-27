const routes = require('express').Router();
const User = require('../controller/user.controller');
const Check = require('../middlewares/user.middlewares')

routes.get('/AllUsers', User.findAllUser)
routes.post('/Create', Check, User.createUser)

module.exports = routes
